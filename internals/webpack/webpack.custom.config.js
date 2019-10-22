const webpackConfig = require('./webpack.config.js');
const ExtractCSS = require('mini-css-extract-plugin');
const path = require('path');

const postCSSPlugins = loader => [
  // require('cssnano')({ preset: 'default' }),
];

webpackConfig.module.rules[1] = {
  test: /\.styl$/,
  include: [path.resolve(__dirname, '../../source')],
  use: [
    {
      loader: ExtractCSS.loader,
      options: {}
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: true,
        sourceMap: false,
        modules: {
          mode: 'local',
          localIdentName: 'grm-[name]__[local]',
          context: path.resolve(__dirname, '../../source/'),
        },
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: postCSSPlugins,
      },
    },
    {
      loader: 'stylus-loader',
      options: {
        import: path.resolve(__dirname, `../../source/styl/00-settings/_default.styl`),
      },
    },
  ]
};

// Export a function. Accept the base config as the only param.
module.exports = {
  ...webpackConfig,

  plugins: [
    new ExtractCSS({
      filename: 'grimorio-ui.custom.min.css'
    }),
  ],
};
