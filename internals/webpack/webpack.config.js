const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const baseConfig = {
  entry: {
    'afiliados-theme': './source/index.js',
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
    extensions: ['.js', '.jsx', '.styl']
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
                modules: true,
                importLoaders: true,
                localIdentName: '[name]_[local]_[hash:base64:5]',
                minimize: true,
                sourceMap: false
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
            'stylus-loader'
          ]
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
        NODE_ENV: 'production'
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
    })
  ],

  devtool: 'eval'
};

module.exports =  baseConfig;
