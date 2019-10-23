const stylus = require('stylus');

module.exports = (styl, filename) =>
  stylus(styl)
    .import(`${__dirname}/../source/styl/00-settings/_default.styl`)
    .set('filename', filename)
    .render();
