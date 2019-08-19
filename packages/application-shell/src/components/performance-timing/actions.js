import { actions as sdkActions } from '@commercetools-frontend/sdk';
import { MC_API_PROXY_TARGETS } from '@commercetools-frontend/constants';

// eslint-disable-next-line import/prefer-default-export
export const pushMetricHistogram = ({ payload }) =>
  sdkActions.post({
    uri: '/metrics/histograms',
    mcApiProxyTarget: MC_API_PROXY_TARGETS.MC_METRICS,
    payload: JSON.stringify(payload),
  });
