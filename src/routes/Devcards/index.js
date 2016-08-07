import { importAll } from 'utils/imports';

import DevcardsLayout from './layouts/DevcardsLayout';
import IntroDevcards from './components/IntroDevcards';

export default {
  path: 'devcards',
  component: DevcardsLayout,
  indexRoute: {
    component: IntroDevcards,
  },
  childRoutes: importAll(
    require.context('./components', false, /.*\.js$/),
    ['./index.js']
  ).map(file => (
    file.RouteMetadata
  )),
};
