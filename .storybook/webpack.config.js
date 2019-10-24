const path = require('path');

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
    exclude : /(node_modules)/,
    include: [path.resolve(__dirname, '../source')],
    use: [
      'style-loader',
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
      // {
      //   loader: 'postcss-loader',
      //   options: {
      //     ident: 'postcss',
      //     plugins: postCSSPlugins,
      //   },
      // },
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
    include: [],
    use: [
      'style-loader',
      'css-loader',
      // {
      //   loader: 'postcss-loader',
      //   options: {
      //     ident: 'postcss',
      //     plugins: postCSSPlugins,
      //   },
      // },
    ]
  },
  // IMG LOADER
  {
    test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf)$/,
    include: path.resolve(__dirname, '../source/'),
    exclude: /(node_modules)/,
    use: {
      loader: 'file-loader'
    }
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

  // Return the altered config
  return config;
};
