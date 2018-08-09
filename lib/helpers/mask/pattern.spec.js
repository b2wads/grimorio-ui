"use strict";

require("../../../internals/test/helper");

var _pattern = _interopRequireDefault(require("./pattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#pattern} */
  describe('Pattern Mask', function () {
    it('should have parameters MASK as String and VALUE as String', function () {
      expect((0, _pattern.default)('999.999.999-99', '99911111101')).toEqual('999.111.111-01');
      expect((0, _pattern.default)('')).toEqual(false);
      expect((0, _pattern.default)(1223)).toEqual(false);
      expect((0, _pattern.default)({})).toEqual(false);
      expect((0, _pattern.default)('999', {})).toEqual(false);
      expect((0, _pattern.default)([])).toEqual(false);
      expect((0, _pattern.default)('999', [])).toEqual(false);
      expect((0, _pattern.default)(null)).toEqual(false);
      expect((0, _pattern.default)('999', null)).toEqual(false);
      expect((0, _pattern.default)()).toEqual(false);
      expect((0, _pattern.default)('999')).toEqual(false);
      expect((0, _pattern.default)(undefined)).toEqual(false);
      expect((0, _pattern.default)(true)).toEqual(false);
      expect((0, _pattern.default)('999', true)).toEqual(false);
    });
    it('returns "20/06/2017" pattern when mask is 99/99/9999 and input is 20062017', function () {
      expect((0, _pattern.default)('99/99/9999', 20062017)).toEqual('20/06/2017');
    });
    it('returns "123.456.789-00" pattern when mask is 999.999.999-99 and input is 12345678900', function () {
      expect((0, _pattern.default)('999.999.999-99', 12345678900)).toEqual('123.456.789-00');
    });
    it('returns "ABC-123" pattern when mask is AAA-999 and input is ABC123', function () {
      expect((0, _pattern.default)('AAA-999', 'ABC123')).toEqual('ABC-123');
    });
    it('returns "(12) 345" pattern when mask is (99) 9999-9999 and input is 12345', function () {
      expect((0, _pattern.default)('(99) 9999-9999', '12345')).toEqual('(12) 345');
    });
  });
});