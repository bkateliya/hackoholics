/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path';
import fs from 'fs';
import { ConfigPlugin } from '..';
import { JssConfig } from 'lib/config';
import { createGraphQLClientFactory } from 'lib/graphql-client-factory/create';

class ThemeDataPlugin implements ConfigPlugin {
  order = 12;

  async exec(config: JssConfig) {
    try {
      const clGraph = createGraphQLClientFactory(config);

      // const gqlClient = await graphqlClientFactory({});
      await clGraph({})
        .request(
          `query {
        item(language:"en",path:"/sitecore/content/XMCHackoholics/${config.sitecoreSiteName}/Settings/Theme/ThemeStyle"){
            fields{
            name
            jsonValue
            }
        }
        }`
        )
        .then((res: any) => {
          const themeSettingsJson = res?.item?.fields;
          const themeData = themeSettingsJson.find((x: { name: string }) => x.name == 'Theme');
          const globalData = themeSettingsJson.find((x: { name: string }) => x.name == 'Json');
          let rawData = {
            ...themeData?.jsonValue?.fields?.Json?.value.replace(/'/g, '"'),
            ...globalData?.jsonValue?.fields?.Json?.value.replace(/'/g, '"'),
          };
          // Step 2: Ensure property names are wrapped in double quotes
          rawData = rawData.replace(/(\w+):/g, '"$1":'); // This will replace `key:` with `"key":`
          // Step 3: Remove trailing commas (commas before closing braces or brackets)
          rawData = rawData.replace(/,(\s*[\}\]])/g, '$1');
          // Step 4: Remove newlines (or you can replace with spaces if you want to preserve formatting)
          rawData = rawData.replace(/\n/g, '').replace(/\s{2,}/g, ' ');
          // Step 5: Parse the cleaned-up string into a JSON object
          const themeSettings = JSON.parse(rawData);
          // Step 6: Convert the object to a properly formatted JSON string
          const configData = JSON.stringify(themeSettings, null, 2); // Pretty print with 2 spaces
          // Define the path to save the tailwind config JSON
          const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');
          // Ensure the directory exists, or create it
          const dir = path.dirname(configPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // Creates the directory if it doesn't exist
          }
          // Step 7: Write the formatted JSON data to the file
          fs.writeFileSync(configPath, configData);
        });
    } catch (e) {
      console.log('ERR', e);
    }
    return config;
  }
}

export const themeDataPlugin = new ThemeDataPlugin();
