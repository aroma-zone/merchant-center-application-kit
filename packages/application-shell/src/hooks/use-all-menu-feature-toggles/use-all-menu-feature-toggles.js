import { useQuery } from 'react-apollo';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { reportErrorToSentry } from '@commercetools-frontend/sentry';
import { FetchAllMenuFeatureToggles } from './fetch-all-menu-feature-toggles.proxy.graphql';

const useAllMenuFeatureToggles = () => {
  const { mcProxyApiUrl, servedByProxy } = useApplicationContext(
    applicationContext => ({
      mcProxyApiUrl: applicationContext.environment.mcProxyApiUrl,
      servedByProxy: applicationContext.environment.servedByProxy,
    })
  );

  const { data, refetch, loading } = useQuery(FetchAllMenuFeatureToggles, {
    fetchPolicy: 'cache-and-network',
    skip: !servedByProxy,
    onError: reportErrorToSentry,
    context: {
      uri: `${mcProxyApiUrl}/api/graphql`,
    },
  });

  return {
    isLoading: loading,
    refetch,
    allFeatureToggles: (data && data.allFeatureToggles) || [],
  };
};

export default useAllMenuFeatureToggles;
