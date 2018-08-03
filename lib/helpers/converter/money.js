"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToBRL = void 0;

var _mask = require("../mask");

var convertToBRL = function convertToBRL(value) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  var formatted = value.toString();

  if (formatted.indexOf('.') >= 0) {
    var count = formatted.split('.');
    count = count[1].length;
    formatted = formatted.replace(/[.]/g, '');

    if (count === 1) {
      formatted = "".concat(formatted, "0");
    }
  } else {
    formatted = "".concat(formatted, "00");
  }

  return (0, _mask.fieldsMask)({
    type: 'money'
  }, formatted);
};

exports.convertToBRL = convertToBRL;