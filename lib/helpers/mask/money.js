"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var moneyMask = function moneyMask(value, options) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  var opts = options || {};
  opts = {
    delimiter: opts.delimiter || '.',
    lastOutput: opts.lastOutput,
    precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
    separator: opts.separator || ',',
    showSignal: opts.showSignal,
    suffixUnit: opts.suffixUnit && " ".concat(opts.suffixUnit.replace(/[\s]/g, '')) || '',
    unit: opts.unit && "".concat(opts.unit.replace(/[\s]/g, ''), " ") || '',
    zeroCents: opts.zeroCents
  };
  opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;

  if (opts.zeroCents) {
    opts.lastOutput = opts.lastOutput || '';
    var zeroMatcher = "(".concat(opts.separator, "[0]{0,").concat(opts.precision, "})");
    var zeroRegExp = new RegExp(zeroMatcher, 'g');
    var digitsLength = value.toString().replace(/[\D]/g, '').length || 0;
    var lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, '').length || 0;
    value = value.toString().replace(zeroRegExp, '');

    if (digitsLength < lastDigitLength) {
      value = value.slice(0, value.length - 1);
    }
  }

  var number = value.toString().replace(/[\D]/g, '');
  var clearDelimiter = new RegExp("^(0|\\".concat(opts.delimiter, ")"));
  var clearSeparator = new RegExp("(\\".concat(opts.separator, ")$"));
  var money = number.substr(0, number.length - opts.moneyPrecision);
  var masked = money.substr(0, money.length % 3);
  var cents = new Array(opts.precision + 1).join('0');
  money = money.substr(money.length % 3, money.length);

  for (var i = 0, len = money.length; i < len; i++) {
    if (i % 3 === 0) {
      masked += opts.delimiter;
    }

    masked += money[i];
  }

  masked = masked.replace(clearDelimiter, '');
  masked = masked.length ? masked : '0';
  var signal = '';

  if (opts.showSignal === true) {
    signal = value < 0 || value.startsWith && value.startsWith('-') ? '-' : '';
  }

  if (!opts.zeroCents) {
    var beginCents = number.length - opts.precision;
    var centsValue = number.substr(beginCents, opts.precision);
    var centsLength = centsValue.length;
    var centsSliced = opts.precision > centsLength ? opts.precision : centsLength;
    cents = (cents + centsValue).slice(-centsSliced);
  }

  var output = opts.unit + signal + masked + opts.separator + cents;
  return output.replace(clearSeparator, '') + opts.suffixUnit;
};

var _default = moneyMask;
exports.default = _default;