import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface GraphQlDataContext {
  themeSettings: {
    style: string;
  } | null; // or a more specific type if you know it
}
/**
 * Custom hook to access GraphQL data context from Sitecore.
 *
 * This hook retrieves the GraphQL data context associated with the current
 * Sitecore context. It returns an object containing the `otherSettings` which
 * includes the `GTMScriptID`. If no GraphQL data is available, it defaults
 * to an object with `otherSettings` set to null.
 *
 * @returns {GraphQlDataContext} The GraphQL data context with optional settings.
 */

const useGraphQlDataContext = (): GraphQlDataContext => {
  const sitecoreContext = useSitecoreContext();
  return (sitecoreContext.sitecoreContext.graphQlData ?? {
    themeSettings: null,
  }) as GraphQlDataContext;
};

export { useGraphQlDataContext };
