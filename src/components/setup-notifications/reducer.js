import { createSelector } from 'reselect';
import { reducer as notificationsReducer } from '@commercetools-local/notifications';
import { DOMAINS } from '@commercetools-local/constants';

export const selectNotifications = state => state.notifications;

// These selectors are okay memoization-wise, but once a single notifications
// is added or removed the memoization for all domain selectors is reset
export const selectGlobalNotifications = createSelector(
  selectNotifications,
  notifications =>
    notifications.filter(notification => notification.domain === DOMAINS.GLOBAL)
);

export const selectPageNotifications = createSelector(
  selectNotifications,
  notifications =>
    notifications.filter(notification => notification.domain === DOMAINS.PAGE)
);

export const selectSideNotifications = createSelector(
  selectNotifications,
  notifications =>
    notifications.filter(notification => notification.domain === DOMAINS.SIDE)
);

export const selectLatestGlobalNotificationAsList = createSelector(
  selectGlobalNotifications,
  notifications => notifications.slice(0, 1)
);

export default notificationsReducer;
