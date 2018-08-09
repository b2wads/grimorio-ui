"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.percentageMask = exports.thousandMask = exports.numberMask = void 0;

var numberMask = function numberMask(value) {
  var invalidValue = !value && value !== ''; // empty is valid

  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.toString().replace(/(?!^-)[^0-9]/g, '');
};

exports.numberMask = numberMask;

var thousandMask = function thousandMask(value) {
  var invalidValue = !value && value !== ''; // empty is valid

  var invalidType;
  var tmp = value;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  tmp = tmp.toString().replace(/\D+/g, '');
  tmp = tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return tmp;
};

exports.thousandMask = thousandMask;

var percentageMask = function percentageMask(value) {
  var invalidValue = !value && value !== ''; // empty is valid

  var invalidType;
  var tmp = value;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  tmp = tmp.toString().replace(/\D+/g, '');

  if (tmp.length === 3 && tmp !== '100') {
    tmp = tmp.replace(/([0-9]{1})$/g, ',$1');
  }

  if (parseInt(tmp) > 100) {
    tmp = '100';
  }

  return tmp;
};

exports.percentageMask = percentageMask;