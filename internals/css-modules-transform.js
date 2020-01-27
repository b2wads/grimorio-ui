const stylus = require('stylus');

module.exports = (styl, filename) =>
  stylus(styl)
    .import(`${__dirname}/../source/styl/config.styl`)
    .set('filename', filename)
    .render();
