import Raven from 'raven-js';

export const boot = () => {
  if (window.app.env === 'production')
    Raven.config(window.app.tracking.sentry, {
      release: window.app.revision,
      tags: { role: 'frontend' },
    }).install();
};

export const updateUser = user => {
  if (user && window.app.env === 'production')
    Raven.setUserContext({
      email: user.email,
      id: user.id,
    });
};

export const removeUser = () => {
  if (window.app.env === 'production') Raven.setUserContext();
};
