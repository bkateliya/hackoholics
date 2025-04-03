import graphqlClientFactory from 'lib/graphql-client-factory';
import config from 'temp/config';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ThemeSettingsData = Record<string, any>;

export async function getOtherSettingsData(): Promise<ThemeSettingsData> {
  const gqlClient = graphqlClientFactory({});
  const response = await gqlClient.request<themeSettingsGraphQLResponse>(otherSettingGraphQl);

  const responseObj: ThemeSettingsData = {};
  if (response?.item?.field?.name)
    responseObj[response?.item?.field?.name] = response?.item?.field?.value;
  return responseObj;
}
type themeSettingsGraphQLResponse = {
  item: {
    field: {
      name: string;
      value: string;
    };
  };
};
// {7E37B866-FCBB-4528-847B-773ACB294262}
// ThemeStyle;
const siteName = config.sitecoreSiteName;

const otherSettingGraphQl = `query {
  item(language:"en",path:"/sitecore/content/XMCHackoholics/${siteName}/Settings/ThemeStyle"){
    field(name:"style"){
      name
      value
    }
  }
}`;
