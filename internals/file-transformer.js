const path = require('path');

module.exports = {
  process(src, filename) {
    return "module.exports = '" + path.basename(filename) + "';";
  },
  getCacheKey(fileData, filename) {
    return filename;
  },
};
