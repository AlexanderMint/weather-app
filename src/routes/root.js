import React from 'react';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from 'containers/App';

const routes = {
  component: App,
  path: '/',
  indexRoute: {
    onEnter: (nextState, replace) => replace('home')
  },
  childRoutes: [
    require('./home').default,
    require('./search').default,
    {
      path: '*',
      indexRoute: {
        onEnter() {
          window.location.href = '/404';
        }
      }
    }
  ]
};

function getHistorySyncWithStore(store) {
  return syncHistoryWithStore(hashHistory, store);
}

/* eslint-disable react/prop-types */
const root = ({ store }) => (
  <Router routes={routes} history={getHistorySyncWithStore(store)} />
);

export default root;
/* eslint-enable react/prop-types */
