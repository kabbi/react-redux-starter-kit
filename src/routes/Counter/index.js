import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/CounterContainer').default;
      const reducer = require('./modules/counter').default;

      injectReducer(store, { key: 'counter', reducer });

      cb(null, Counter);
    }, 'counter');
  },
});
