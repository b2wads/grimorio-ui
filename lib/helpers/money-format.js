"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moneyFormat = void 0;

var moneyFormat = function moneyFormat(int) {
  var rx = /(\d)(?=(\d{3})+\,)/g;

  if (typeof int !== 'number') {
    return null;
  }

  var num = "".concat(int.toFixed(2));
  return "R$ ".concat(num.replace('.', ',').replace(rx, '$1.'));
};

exports.moneyFormat = moneyFormat;