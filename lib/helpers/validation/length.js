"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minLengthValidation = minLengthValidation;
exports.maxLengthValidation = maxLengthValidation;

function minLengthValidation(value, length, message) {
  var validationState = undefined;
  var errorMessage = undefined;

  if (value) {
    if (value.length < length) {
      validationState = 'error';
      errorMessage = message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }

  return {
    validationState: validationState,
    errorMessage: errorMessage
  };
}

function maxLengthValidation(value, length, message) {
  var validationState = undefined;
  var errorMessage = undefined;

  if (value) {
    if (value.length > length) {
      validationState = 'error';
      errorMessage = message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }

  return {
    validationState: validationState,
    errorMessage: errorMessage
  };
}