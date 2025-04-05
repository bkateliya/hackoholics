/* eslint-disable @typescript-eslint/no-unused-vars */
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
import path from 'path';
import fs from 'fs';
import { getOtherSettingsData, ThemeSettingsData } from '../graphql/themeSettings';
import { getJsonSettingsData } from '../graphql/themeJsonSettings';

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
    const [themeSettingsJson] = await Promise.all([getJsonSettingsData()]);

    props.layoutData.sitecore.context.graphQlData = {
      themeSettings,
    };

    try {
      const configData = (themeSettingsJson.Json as string).replaceAll('\n', '');

      // Define the path to save the tailwind config JSON
      const configPath = path.resolve(process.cwd(), 'data', 'tailwind-config.json');

      // Write the data to the JSON file
      fs.writeFileSync(configPath, JSON.parse(configData));
    } catch {
      console.log('FILE ERROR');
    }

    return props;
  }
}
export interface GraphQlData {
  themeSettings: ThemeSettingsData | null;
}

export const themeDataPlugin = new ThemeDataPlugin();
