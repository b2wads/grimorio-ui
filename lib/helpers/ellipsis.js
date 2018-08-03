"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ellipsis = void 0;

var ellipsis = function ellipsis() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var len = arguments.length > 1 ? arguments[1] : undefined;

  if (str.length > len) {
    return "".concat(str.substring(0, len - 3), "...");
  } else {
    return str;
  }
};

exports.ellipsis = ellipsis;