export default {
  path: '/search',
  indexRoute: {
    onEnter: (nextState, replace) => replace('/search/ ')
  },
  childRoutes: [
    {
      path: '/search/:input',
      getComponent(nextState, callback) {
        require.ensure([], (require) => {
          callback(null, require('containers/SearchPage').default);
        });
      }
    }
  ]
};
