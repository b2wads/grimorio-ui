"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToZeroFilled = exports.convertToDecimal = exports.convertToFloat = void 0;

var convertToFloat = function convertToFloat(value) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (value === '') {
    return value;
  }

  if (value && value.constructor === Number) {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  var newValue = value;
  newValue = newValue.replace(/[.]/g, '');
  newValue = newValue.replace(/[,]/g, '.');
  return parseFloat(newValue);
};

exports.convertToFloat = convertToFloat;

var convertToDecimal = function convertToDecimal(value) {
  var invalidValue = !value;
  var invalidType;

  if (value === '') {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  var newValue = value.toString();
  newValue = newValue.replace(/[.]/g, ',');
  return newValue;
};

exports.convertToDecimal = convertToDecimal;

var convertToZeroFilled = function convertToZeroFilled(value, digits) {
  var invalidValue = !value || !digits;
  var invalidType;

  if (value === '') {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== Number && value.constructor !== String && digits.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  var num = digits;
  var digitsQuantity = '';
  var newValue = value.toString();

  while (num > 0) {
    digitsQuantity = "".concat(digitsQuantity, "0");
    num--;
  }

  newValue = digitsQuantity.substring(0, digitsQuantity.length - newValue.length) + newValue;
  return newValue;
};

exports.convertToZeroFilled = convertToZeroFilled;