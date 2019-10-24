const stylus = require('stylus');

module.exports = (styl, filename) =>
  stylus(styl)
    .import(`${__dirname}/../lib/css/config.styl`)
    .set('filename', filename)
    .render();
