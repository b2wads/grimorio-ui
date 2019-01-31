const stylus = require('stylus');

module.exports = (styl, filename) =>
  stylus(styl)
    .import(`${__dirname}/../source/styl/00-settings/_${process.env.THEME_ENV}.styl`)
    .set('filename', filename)
    .render();