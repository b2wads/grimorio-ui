const webpackConfig = require('../webpack/webpack.dev.config.js');
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules = (defaultConfig.module.rules || []).concat(webpackConfig.module.rules);
  defaultConfig.resolve.alias = webpackConfig.resolve.alias;

  return defaultConfig;
};
