import webpack from 'webpack';
import _debug from 'debug';
import config from '../config';

const debug = _debug('app:build:webpack-compiler');
const DEFAULT_STATS_FORMAT = config.compiler_stats;

export default (webpackConfig, statsFormat = DEFAULT_STATS_FORMAT) => (
  new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      const jsonStats = stats.toJson();

      debug('Webpack compile completed.');
      debug(stats.toString(statsFormat));

      if (err) {
        debug('Webpack compiler encountered a fatal error.', err);
        reject(err);
        return;
      } else if (jsonStats.errors.length > 0) {
        debug('Webpack compiler encountered errors.');
        debug(jsonStats.errors.join('\n'));
        reject(new Error('Webpack compiler encountered errors'));
        return;
      } else if (jsonStats.warnings.length > 0) {
        debug('Webpack compiler encountered warnings.');
        debug(jsonStats.warnings.join('\n'));
      } else {
        debug('No errors or warnings encountered.');
      }
      resolve(jsonStats);
    });
  })
);
