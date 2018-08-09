"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datetimeValidation = datetimeValidation;
exports.afterToday = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function datetimeValidation(value, message) {
  var validationState = undefined;
  var errorMessage = undefined; // 23/06/2017 10:00

  var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} \d{2}:\d{2}$/g;

  if (new RegExp(regex).test(value)) {
    validationState = 'success';
    errorMessage = undefined;
  } else {
    validationState = 'error';
    errorMessage = message;
  }

  return {
    validationState: validationState,
    errorMessage: errorMessage
  };
}

var afterToday = function afterToday(value, validationItem) {
  var today = (0, _moment.default)();
  var validationState;
  var errorMessage;

  if (!value) {
    validationState = 'error';
    errorMessage = 'value is undefined';
  } else if (!validationItem) {
    validationState = 'error';
    errorMessage = 'validationItem is undefined';
  } else if (!validationItem.message) {
    validationState = 'error';
    errorMessage = 'message is undefined';
  } else {
    if (today.isAfter((0, _moment.default)(value, 'DD/MM/YYYY HH:mm'))) {
      validationState = 'error';
      errorMessage = validationItem.message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }

  return {
    validationState: validationState,
    errorMessage: errorMessage
  };
};

exports.afterToday = afterToday;