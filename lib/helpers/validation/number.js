"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numberValidation;

function numberValidation(value, message) {
  var validationState = undefined;
  var errorMessage = undefined;

  if (value) {
    var regex = /[^0-9]/g;

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