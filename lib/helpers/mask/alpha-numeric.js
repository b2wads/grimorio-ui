"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var alphaNumericMask = function alphaNumericMask(value) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.replace(/[^a-z0-9 ]+/g, '');
};

var _default = alphaNumericMask;
exports.default = _default;