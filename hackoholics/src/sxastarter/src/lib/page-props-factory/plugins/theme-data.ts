/* eslint-disable @typescript-eslint/no-unused-vars */
import { SitecorePageProps } from 'lib/page-props';
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Plugin } from '..';
import { getOtherSettingsData, ThemeSettingsData } from '../graphql/themeSettings';
import { getOrSetCache } from 'lib/utils/cache-helper';

class ThemeDataPlugin implements Plugin {
  order = 1.5;

  async exec(
    props: SitecorePageProps,
    _context: GetServerSidePropsContext | GetStaticPropsContext
  ) {
    const siteName = props.site.name;
    const language = props.layoutData.sitecore.context.language ?? 'en';

    const cacheKey = `ThemeDataPlugin:${siteName}:${language}`;
    const [themeSettings] = await getOrSetCache(cacheKey, () =>
      Promise.all([getOtherSettingsData()])
    );

    props.layoutData.sitecore.context.graphQlData = {
      themeSettings,
    };

    return props;
  }
}

export interface GraphQlData {
  themeSettings: ThemeSettingsData | null;
}

export const themeDataPlugin = new ThemeDataPlugin();
