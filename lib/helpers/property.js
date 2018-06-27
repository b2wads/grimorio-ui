"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomId = void 0;

var randomId = function randomId(len, pattern) {
  var possibilities = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789'];
  var chars = '';
  var result = '';
  pattern = pattern ? pattern : 'aA0';
  len = len ? len : 10;
  pattern.split('').forEach(function (a) {
    if (!isNaN(parseInt(a))) {
      chars += possibilities[2];
    } else if (/[a-z]/.test(a)) {
      chars += possibilities[0];
    } else if (/[A-Z]/.test(a)) {
      chars += possibilities[1];
    }
  });

  while (len--) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};

exports.randomId = randomId;