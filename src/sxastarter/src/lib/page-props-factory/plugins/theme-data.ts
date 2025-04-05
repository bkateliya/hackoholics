/* eslint-disable @typescript-eslint/no-unused-vars */
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
// import path from 'path';
// import fs from 'fs';
import { getOtherSettingsData, ThemeSettingsData } from '../graphql/themeSettings';
// import { getJsonSettingsData } from '../graphql/themeJsonSettings';

class ThemeDataPlugin implements Plugin {
  order = 1.5;

  async exec(
    props: SitecorePageProps,
    _context: GetServerSidePropsContext | GetStaticPropsContext
  ) {
    // const siteName = props.site.name;
    // const language = props.layoutData.sitecore.context.language ?? 'en';

    // const cacheKey = `ThemeDataPlugin:${siteName}:${language}`;

    // Bypass cache to always fetch fresh data
    const [themeSettings] = await Promise.all([getOtherSettingsData()]);
    // const themeSettingsJson = await getJsonSettingsData();

    props.layoutData.sitecore.context.graphQlData = {
      themeSettings,
    };

    try {
      // const themeData = themeSettingsJson.find((x: { name: string }) => x.name == 'Theme');
      // const globalData = themeSettingsJson.find((x: { name: string }) => x.name == 'Json');
      // let rawData = themeData?.jsonValue?.fields?.Json?.value
      //   ? themeData?.jsonValue?.fields?.Json?.value.replace(/'/g, '"')
      //   : globalData?.jsonValue?.fields?.Json?.value.replace(/'/g, '"') || {};
      // // Step 2: Ensure property names are wrapped in double quotes
      // rawData = rawData.replace(/(\w+):/g, '"$1":'); // This will replace `key:` with `"key":`
      // // Step 3: Remove trailing commas (commas before closing braces or brackets)
      // rawData = rawData.replace(/,(\s*[\}\]])/g, '$1');
      // // Step 4: Remove newlines (or you can replace with spaces if you want to preserve formatting)
      // rawData = rawData.replace(/\n/g, '').replace(/\s{2,}/g, ' ');
      // // Step 5: Parse the cleaned-up string into a JSON object
      // const themeSettings = JSON.parse(rawData);
      // // Step 6: Convert the object to a properly formatted JSON string
      // const configData = JSON.stringify(themeSettings, null, 2); // Pretty print with 2 spaces
      // // Define the path to save the tailwind config JSON
      // const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');
      // // Ensure the directory exists, or create it
      // const dir = path.dirname(configPath);
      // if (!fs.existsSync(dir)) {
      //   fs.mkdirSync(dir, { recursive: true }); // Creates the directory if it doesn't exist
      // }
      // // Step 7: Write the formatted JSON data to the file
      // fs.writeFileSync(configPath, configData);
      // // generate-tailwind-config.js
      // // Example of dynamic Tailwind configuration
      // const tailwindConfig = {
      //   content: ['./src/**/*.{js,ts,jsx,tsx}'],
      //   theme: {
      //     extend: configData,
      //   },
      //   plugins: [],
      // };
      // // Define the path to save the Tailwind config
      // const configPath2 = path.resolve(process.cwd(), 'tailwind.config.js');
      // // Write the config data to a JavaScript file
      // fs.writeFileSync(configPath2, `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`);
    } catch (e) {
      console.log('FILE ERROR', e);
    }

    return props;
  }
}
export interface GraphQlData {
  themeSettings: ThemeSettingsData | null;
}

export const themeDataPlugin = new ThemeDataPlugin();
