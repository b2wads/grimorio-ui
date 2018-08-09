"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = requiredValidation;

function requiredValidation(value, message) {
  var validationState = undefined;
  var errorMessage = undefined;
  var exists = typeof value !== 'undefined';

  if (exists) {
    var stringValue = value.constructor === String && value !== '';
    var numberValue = value.constructor === Number;
    var arrayValue = value.constructor === Array && value.length > 0;

    var verifyObject = function verifyObject(value) {
      var exists = false;

      if (value.hasOwnProperty('valid')) {
        if (value.valid === true) {
          exists = true;
        }
      } else {
        Object.keys(value).forEach(function (key) {
          if (value[key]) {
            exists = true;
          }
        });
      }

      return exists;
    };

    var objectValue = value.constructor === Object && verifyObject(value);

    if (stringValue || numberValue || arrayValue || objectValue) {
      validationState = 'success';
      errorMessage = undefined;
    } else {
      validationState = 'error';
      errorMessage = message;
    }
  } else {
    validationState = 'error';
    errorMessage = message;
  }

  return {
    validationState: validationState,
    errorMessage: errorMessage
  };
}