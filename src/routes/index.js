import CoreLayout from 'layouts/CoreLayout';
import Home from './Home';

import makeCounterRoute from './Counter';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    makeCounterRoute(store),
  ],
});

export default createRoutes;
