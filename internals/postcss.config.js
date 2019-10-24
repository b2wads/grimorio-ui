// PostCSS config ONLY to process CSS variables
module.exports = ctx => ({
  plugins: {
    'postcss-custom-properties': {
      preserve: false,
      importFrom: ['./lib/css/variables.css'],
    },
  },
});
