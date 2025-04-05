import graphqlClientFactory from 'lib/graphql-client-factory';
import config from 'temp/config';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ThemeSettingsData = Record<string, any>;

export async function getJsonSettingsData(): Promise<ThemeSettingsData> {
  const gqlClient = graphqlClientFactory({});
  const response = await gqlClient.request<themeSettingsGraphQLResponse>(otherSettingGraphQl);

  let responseObj: ThemeSettingsData = {};
  if (response?.item?.fields.length) responseObj = response?.item?.fields;

  return responseObj;
}
type themeSettingsGraphQLResponse = {
  item: {
    fields: [
      {
        name: string;
        jsonValue: string;
      }
    ];
  };
};
// {7E37B866-FCBB-4528-847B-773ACB294262}
// ThemeStyle;
const siteName = config.sitecoreSiteName;

const otherSettingGraphQl = `query {
  item(language:"en",path:"/sitecore/content/XMCHackoholics/${siteName}/Settings/Theme/ThemeStyle"){
    fields{
      name
      jsonValue
    }
  }
}`;
