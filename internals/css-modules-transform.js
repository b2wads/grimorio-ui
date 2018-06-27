const stylus = require('stylus');

module.exports = (styl, filename) =>
  stylus(styl)
      .set('filename', filename)
      .render();
