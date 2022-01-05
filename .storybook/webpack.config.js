const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfigRules = mode => [// rules for modules (configure loaders, parser options, etc.)
  // JS LOADER
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    },
  },
  // STYLUS LOADER
  {
    test: /\.styl$/,
    sideEffects: true,
    exclude: /(node_modules)/,
    include: [path.resolve(__dirname, './'), path.resolve(__dirname, '../source/components')],
    use: [
      mode === 'PRODUCTION' ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          modules: {
            mode: 'local',
            localIdentName: 'grm-[name]__[local]',
            localIdentContext: path.resolve(__dirname, '../source/'),
          },
        }
      },
      {
        loader: 'stylus-loader',
        options: {
          import: path.resolve(__dirname, `../source/styl/config.styl`),
        },
      },
    ],
  },
  {
    test: /\.styl$/,
    sideEffects: true,
    exclude: /(node_modules)/,
    include: [path.resolve(__dirname, '../source')],
    exclude: [path.resolve(__dirname, '../source/components')],
    use: [
      mode === 'PRODUCTION' ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      {
        loader: 'stylus-loader',
        options: {
          import: path.resolve(__dirname, `../source/styl/config.styl`),
        },
      },
    ],
  },
  // CSS LOADER
  {
    test: /\.css$/,
    sideEffects: true,
    include: [path.resolve(__dirname, `../node_modules/react-dates/lib`)],
    use: [
      mode === 'PRODUCTION' ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  },
  // IMG LOADER
  {
    test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf)$/,
    sideEffects: true,
    include: path.resolve(__dirname, '../source/'),
    exclude: /(node_modules)/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'file-loader'
      }
    ],
  },
  // SVG LOADER
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
];

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // Replaces the webpack rule that loads SVGs as static files to leave out SVG files for our own preferences
  const indexOfRuleToRemove = config.module.rules.findIndex(rule => rule.test.toString().includes('svg'))
  config.module.rules.splice(indexOfRuleToRemove, 1, {
    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
    loader: require.resolve('file-loader'),
    options: {
      name: 'static/media/[name].[hash:8].[ext]',
      esModule: false
    }
  })

  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  const rules = webpackConfigRules(mode);

  config.module.rules = (config.module.rules || []).concat(rules);

  config.plugins = (config.plugins || []).concat([new MiniCssExtractPlugin({
    filename: '[name].css',
  })]);

  // Return the altered config
  return config;
};
