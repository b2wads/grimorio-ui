"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var patternMask = function patternMask(mask, value) {
  var invalidValue = !value && value !== '';
  var invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (!mask || invalidValue || invalidType) {
    return false;
  }

  var DIGIT = '9';
  var ALPHA = 'A';
  var ALPHANUM = 'S';
  var pattern = mask;
  var patternChars = pattern.replace(/\W/g, '');
  var output = pattern.split('');
  var values = value.toString().replace(/\W/g, '');
  var charsValues = values.replace(/\W/g, '');
  var i;
  var len;
  var index = 0;

  for (i = 0, len = output.length; i < len; i++) {
    if (index >= values.length) {
      if (patternChars.length === charsValues.length) {
        return output.join('');
      } else {
        break;
      }
    } else {
      var isDigit = output[i] === DIGIT && values[index].match(/[0-9]/);
      var isAlpha = output[i] === ALPHA && values[index].match(/[a-zA-Z]/);
      var isAlphanumeric = output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/);

      if (isDigit || isAlpha || isAlphanumeric) {
        output[i] = values[index++];
      } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
        return output.slice(0, i).join('');
      }
    }
  }

  return output.join('').substr(0, i);
};

var _default = patternMask;
exports.default = _default;