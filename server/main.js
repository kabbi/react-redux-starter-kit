import Koa from 'koa';
import convert from 'koa-convert';
import webpack from 'webpack';
import webpackConfig from '../build/webpack.config';
import historyApiFallback from 'koa-connect-history-api-fallback';
import serve from 'koa-static';
import proxy from 'koa-proxy';
import _debug from 'debug';
import config from '../config';
import webpackDevMiddleware from './middleware/webpack-dev';
import webpackHMRMiddleware from './middleware/webpack-hmr';

const debug = _debug('app:server');
const paths = config.utils_paths;
const app = new Koa();

if (config.proxy && config.proxy.enabled) {
  app.use(convert(proxy(config.proxy.options)));
}

app.use(convert(historyApiFallback({
  verbose: false,
})));

if (config.env === 'development') {
  const compiler = webpack(webpackConfig);

  const { publicPath } = webpackConfig.output;

  app.use(webpackDevMiddleware(compiler, publicPath));
  app.use(webpackHMRMiddleware(compiler));

  // Serve `src/static` files as webpack is unaware of them
  app.use(serve(paths.client('static')));
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  );

  app.use(serve(paths.dist()));
}

export default app;
