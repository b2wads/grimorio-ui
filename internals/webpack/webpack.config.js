const path = require('path');
const ExtractCSS = require('mini-css-extract-plugin');
const postcssPresetEnv= require('postcss-preset-env');
const postcssNano= require('cssnano');

module.exports = (env, argv) => {
  const isProd = () => env.NODE_ENV === 'production';

  console.log('isProd?', isProd());

  const postCSSPlugins = [
    postcssPresetEnv({ browsers: ['> 0.05%', 'IE 9'] }),
    // postcssNano({ preset: 'default' }),
  ];

  return {
    // mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

    entry: {
      'grimorio-ui': [
        './source/styl/variables.css',
        './source/index.js',
        './source/styl/style.styl',
        './node_modules/react-dates/lib/css/_datepicker.css',
      ],
    },
    // Here the application starts executing
    // and webpack starts bundling

    output: {
      path: path.resolve(__dirname, '../../dist'),
      filename: '[name].min.js'
    },

    resolve: {
      extensions: ['.js', '.jsx', '.styl'],
      alias: {
        components: path.resolve(__dirname, '../../source/components/'),
        helpers: path.resolve(__dirname, '../../source/helpers/'),
      },
    },

    module: {
      // configuration regarding modules
      rules: [// rules for modules (configure loaders, parser options, etc.)
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
          include: [path.resolve(__dirname, '../../source')],
          use: [
            {
              loader: isProd() ? ExtractCSS.loader : 'style-loader',
              options: {}
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: true,
                sourceMap: true,
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
        },
        // CSS LOADER
        {
          test: /\.css$/,
          include: isProd() ? [
              path.resolve(__dirname, '../../node_modules/react-dates/lib/css/_datepicker.css'),
              path.resolve(__dirname, '../../source')
            ] : [],
          use: [
            {
              loader: isProd() ? ExtractCSS.loader : 'style-loader',
              options: {}
            },
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: postCSSPlugins,
              },
            },
          ]
        },
        // IMG LOADER
        {
          test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf)$/,
          include: path.resolve(__dirname, '../../source/'),
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
        }

      ],
    },

    externals: ["react"],
    // Don't follow/bundle these modules, but request them at runtime from the environment

    plugins: [
      new ExtractCSS({
        filename: 'grimorio-ui-custom.min.css',
      }),
    ],
  };
};

// docs: https://webpack.js.org/configuration/#use-different-config-file
