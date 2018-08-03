"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.letterValidation = letterValidation;
exports.alphaNumericValidation = alphaNumericValidation;

function letterValidation(value, message) {
  var validationState = undefined;
  var errorMessage = undefined;
  var regex = /[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g;

  if (value) {
    if (new RegExp(regex).test(value)) {
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

function alphaNumericValidation(value, message) {
  var validationState = undefined;
  var errorMessage = undefined;
  var regex = /[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ0-9 ]/g;

  if (value) {
    if (new RegExp(regex).test(value)) {
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