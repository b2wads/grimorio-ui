"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fieldsValidation = void 0;

var _required = _interopRequireDefault(require("./required"));

var _datetime = require("./datetime");

var _number = _interopRequireDefault(require("./number"));

var _string = require("./string");

var _length = require("./length");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldsValidation = function fieldsValidation(value, validation) {
  var validationAndMessage = {
    validationState: undefined,
    errorMessage: undefined
  };

  var validated = function validated(validationAndMessage) {
    return validationAndMessage.validationState !== 'error';
  };

  if (validation) {
    validation.map(function (validationItem) {
      if (validationItem.rule === 'required') {
        validationAndMessage = (0, _required.default)(value, validationItem.message);
      }

      if (validationItem.rule === 'alphanumeric' && validated(validationAndMessage)) {
        validationAndMessage = (0, _string.alphaNumericValidation)(value, validationItem.message);
      }

      if (validationItem.rule === 'letter' && validated(validationAndMessage)) {
        validationAndMessage = (0, _string.letterValidation)(value, validationItem.message);
      }

      if (validationItem.rule === 'number' && validated(validationAndMessage)) {
        validationAndMessage = (0, _number.default)(value, validationItem.message);
      }

      if (validationItem.rule === 'datetime' && validated(validationAndMessage)) {
        validationAndMessage = (0, _datetime.datetimeValidation)(value, validationItem.message);
      }

      if (validationItem.rule === 'afterToday' && validated(validationAndMessage)) {
        validationAndMessage = (0, _datetime.afterToday)(value, validationItem);
      }

      if (validationItem.rule === 'minLength' && validated(validationAndMessage)) {
        validationAndMessage = (0, _length.minLengthValidation)(value, validationItem.length, validationItem.message);
      }

      if (validationItem.rule === 'maxLength' && validated(validationAndMessage)) {
        validationAndMessage = (0, _length.maxLengthValidation)(value, validationItem.length, validationItem.message);
      }
    });
  }

  return validationAndMessage;
};

exports.fieldsValidation = fieldsValidation;