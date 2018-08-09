"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var alphaMask = function alphaMask(value) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.replace(/[^a-z ]+/g, '');
};

var _default = alphaMask;
exports.default = _default;