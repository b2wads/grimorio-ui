const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

const baseConfig = {
  entry: {
    'grimorio-ui': [
      './source/index.js',
      './source/styl/style.styl',
      './node_modules/react-dates/lib/css/_datepicker.css',
    ],
  },

  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: '[name].min.js'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      }
    }
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
    alias: {
      components: path.resolve(__dirname, '../../source/components/'),
      helpers: path.resolve(__dirname, '../../source/helpers/'),
    },
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.styl$/,
        include: path.resolve(__dirname, '../../source/'),
        exclude : /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
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
                config: {
                  path: path.resolve(__dirname, './config/postcss.config.js')
                }
              }
            },
            {
              loader: 'stylus-loader',
              options: {
                import: path.resolve(__dirname, `../../source/styl/00-settings/_${process.env.THEME_ENV}.styl`),
              },
            },
          ]
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, './config/postcss.config.js')
                }
              }
            }
          ],
        }),
      },
      {
        test: /\.(jpe?g|jpg|gif|ico|png|woff|woff2|eot|ttf)$/,
        include: path.resolve(__dirname, '../../source/'),
        exclude: /(node_modules)/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader',
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'production',
        THEME_ENV: 'afiliados',
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
      sourceMap: false
    }),
    new ExtractTextPlugin(`[name].min.css`, {
      allowChunks: true
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
  ],

  devtool: 'eval'
};

module.exports =  baseConfig;
