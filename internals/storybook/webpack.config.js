const webpackConfig = require('../webpack/webpack.dev.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = (defaultConfig.module.rules || []).concat(webpackConfig.module.rules);

  return defaultConfig;
};
