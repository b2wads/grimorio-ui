"use strict";

require("../../../internals/test/helper");

var _alphaNumeric = _interopRequireDefault(require("./alpha-numeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#Alphanumeric} */
  describe('Alphanumeric Mask', function () {
    it('should have parameter VALUE as String', function () {
      expect((0, _alphaNumeric.default)('test123')).toEqual('test123');
      expect((0, _alphaNumeric.default)('')).toEqual('');
      expect((0, _alphaNumeric.default)(1223)).toEqual(false);
      expect((0, _alphaNumeric.default)({})).toEqual(false);
      expect((0, _alphaNumeric.default)([])).toEqual(false);
      expect((0, _alphaNumeric.default)(null)).toEqual(false);
      expect((0, _alphaNumeric.default)()).toEqual(false);
      expect((0, _alphaNumeric.default)(undefined)).toEqual(false);
      expect((0, _alphaNumeric.default)(true)).toEqual(false);
    });
    it('should have contain only letters and numbers', function () {
      expect((0, _alphaNumeric.default)('122tes21t')).toEqual('122tes21t');
      expect((0, _alphaNumeric.default)('122t%%%es21t#')).toEqual('122tes21t');
      expect((0, _alphaNumeric.default)('___________')).toEqual('');
    });
  });
});