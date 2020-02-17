const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var glob = require("glob");

const webpackConfigRules = [// rules for modules (configure loaders, parser options, etc.)
  // JS LOADER
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  // STYLUS LOADER
  {
    test: /\.styl$/,
    sideEffects: true,
    exclude : /(node_modules)/,
    include: [path.resolve(__dirname, './'), path.resolve(__dirname, '../source/components')],
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: true,
          sourceMap: true,
          modules: {
            mode: 'local',
            localIdentName: 'grm-[name]__[local]',
            context: path.resolve(__dirname, '../source/'),
          },
        }
      },
      {
        loader: 'stylus-loader',
        options: {
          import: path.resolve(__dirname, `../source/styl/config.styl`),
        },
      },
    ]
  },
  {
    test: /\.styl$/,
    sideEffects: true,
    exclude : /(node_modules)/,
    include: [path.resolve(__dirname, '../source')],
    exclude: [path.resolve(__dirname, '../source/components')],
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      'css-loader',
      {
        loader: 'stylus-loader',
        options: {
          import: path.resolve(__dirname, `../source/styl/config.styl`),
        },
      },
    ]
  },
  // CSS LOADER
  {
    test: /\.css$/,
    sideEffects: true,
    include: [path.resolve(__dirname, `../node_modules/react-dates/lib`)],
    use: [
      MiniCssExtractPlugin.loader,
      // 'style-loader',
      'css-loader',
      // {
      //   loader: 'postcss-loader',
      //   options: {
      //     ident: 'postcss',
      //     plugins: postCSSPlugins,
      //   },
      // },
    ]
    // path.resolve(__dirname, `../lib/css`)
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
    ]
  },
  // SVG LOADER
  {
    test: /\.svg$/,
    exclude: /node_modules/,
    loader: 'svg-react-loader',
  },
  // STORIES
  {
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  }
];

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules = (config.module.rules || []).concat(webpackConfigRules);

  config.plugins = (config.plugins || []).concat([new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  })]);

  console.log('ssssssssssssssssssssssssssssssss',config.entry );

  config.entry = {
    storybook: config.entry,
    // components: path.resolve(__dirname, '../lib/css/grimorio-ui.min.css')
    components: glob.sync('./source/components/**/*.styl')
  };
  // Return the altered config
  return config;
};
