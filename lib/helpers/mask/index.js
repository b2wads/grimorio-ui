"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.masks = exports.fieldsMask = void 0;

var _pattern = _interopRequireDefault(require("./pattern"));

var _money = _interopRequireDefault(require("./money"));

var _number = require("./number");

var _alphaNumeric = _interopRequireDefault(require("./alpha-numeric"));

var _alpha = _interopRequireDefault(require("./alpha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fieldsMask = function fieldsMask(mask, value) {
  if (!value) {
    return '';
  }

  if (!mask || !mask.type || value === '') {
    return value;
  }

  switch (mask.type) {
    case 'pattern':
      return (0, _pattern.default)(mask.value, value);

    case 'money':
      return (0, _money.default)(value);

    case 'number':
      return (0, _number.numberMask)(value);

    case 'thousand':
      return (0, _number.thousandMask)(value);

    case 'alphanumeric':
      return (0, _alphaNumeric.default)(value);

    case 'alpha':
      return (0, _alpha.default)(value);

    case 'percentage':
      return (0, _number.percentageMask)(value);
  }
};

exports.fieldsMask = fieldsMask;
var masks = {
  datetime: '##/##/#### ##:##',
  date: '##/##/####',
  time: '##:##:##',
  cep: '#####-###',
  cpf: '###.###.###-##',
  cnpj: '##.###.###/####-##'
};
exports.masks = masks;