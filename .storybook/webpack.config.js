const webpackConfig = require('../internals/webpack/webpack.dev.config.js');
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules = (config.module.rules || []).concat(webpackConfig.module.rules);
  config.resolve.alias = webpackConfig.resolve.alias;

  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  // Return the altered config
  return config;
};
