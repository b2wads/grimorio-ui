"use strict";

require("../../../internals/test/helper");

var _alpha = _interopRequireDefault(require("./alpha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#alpha} */
  describe('Alpha Mask', function () {
    it('should have parameter VALUE as String', function () {
      expect((0, _alpha.default)('test')).toEqual('test');
      expect((0, _alpha.default)('')).toEqual('');
      expect((0, _alpha.default)(1223)).toEqual(false);
      expect((0, _alpha.default)({})).toEqual(false);
      expect((0, _alpha.default)([])).toEqual(false);
      expect((0, _alpha.default)(null)).toEqual(false);
      expect((0, _alpha.default)()).toEqual(false);
      expect((0, _alpha.default)(undefined)).toEqual(false);
      expect((0, _alpha.default)(true)).toEqual(false);
    });
    it('should have contain only letters', function () {
      expect((0, _alpha.default)('122tes21t')).toEqual('test');
      expect((0, _alpha.default)('122t%%%es21t#')).toEqual('test');
      expect((0, _alpha.default)('___________')).toEqual('');
    });
  });
});