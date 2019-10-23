const postcssPresetEnv = require('postcss-preset-env');
const postcssNano = require('cssnano');

const postCSSPlugins = [
  postcssPresetEnv({
    browsers: ['> 0.05%', 'IE 9'],
  }),
  // postcssNano({ preset: 'default' }),
];

const cssFileList = [
  'source/styl/variables.css',
  'source/styl/style.styl',
  'lib/modules/components.css',
  'source/styl/react-dates.styl',
];

module.exports = {
  paths: {
    public: 'lib',
    watched: cssFileList,
  },

  plugins: {
    stylus: {
      includeCss: true,
      includePaths: ['node_modules'],
      imports: ['./source/styl/00-settings/_default.styl'],
    },
    postcss: {
      processors: postCSSPlugins,
    },
  },

  npm: {
    whitelist: ['react-dates'],
  },

  files: {
    stylesheets: {
      joinTo: {
        'css/grimorio-ui-custom.min.css': cssFileList,
      },
    },
  },
};
