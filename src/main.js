import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from 'redux/configureStore';
import RootRoutes from 'routes/root';

import 'styles/main.less';

injectTapEventPlugin();

// create store
const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RootRoutes store={store} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('main-box')
);
