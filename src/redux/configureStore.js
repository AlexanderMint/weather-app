import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'redux/modules';

export default function configureStore(initialState = {}) {
  const store = compose(
    applyMiddleware(thunkMiddleware)
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('redux/modules', () => {
      const nextReducer = require('redux/modules/index').default;

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
