const postcssPresetEnv = require('postcss-preset-env');
const postcssNano = require('cssnano');

const postCSSPlugins = [
  postcssPresetEnv({
    browsers: ['> 0.05%', 'IE 9'],
  }),
  postcssNano({ preset: 'default' }),
];

const cssFileList = ['source/styl/style.styl', 'lib/css/modules/components.css', 'source/styl/vendor/react-dates.styl'];

module.exports = {
  paths: {
    public: 'lib',
    watched: ['source/styl/variables.styl', ...cssFileList],
  },

  plugins: {
    stylus: {
      includeCss: true,
      includePaths: ['node_modules'],
      imports: ['./source/styl/config.styl'],
    },
    postcss: {
      processors: postCSSPlugins,
    },
  },

  npm: {
    whitelist: ['react-dates'],
  },

  sourceMaps: false,

  files: {
    stylesheets: {
      joinTo: {
        'css/grimorio-ui.min.css': ['source/styl/variables.styl', ...cssFileList],
        'css/grimorio-ui-custom.min.css': cssFileList,
        'css/variables.css': ['source/styl/variables.styl'],
      },
    },
  },
};
