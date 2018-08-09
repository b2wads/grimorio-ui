"use strict";

require("../../../internals/test/helper");

var _money = _interopRequireDefault(require("./money"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#Money} */
  describe('Money Mask', function () {
    it('should have parameter VALUE as String', function () {
      expect((0, _money.default)(10000000000)).toEqual('100.000.000,00');
      expect((0, _money.default)('')).toEqual('0,00');
      expect((0, _money.default)({})).toEqual(false);
      expect((0, _money.default)([])).toEqual(false);
      expect((0, _money.default)(null)).toEqual(false);
      expect((0, _money.default)()).toEqual(false);
      expect((0, _money.default)(undefined)).toEqual(false);
      expect((0, _money.default)(true)).toEqual(false);
    });
    it('returns 0,10 when number is 10', function () {
      expect((0, _money.default)(10)).toEqual('0,10');
    });
    it('returns 1.000 when precision is 0', function () {
      expect((0, _money.default)(1000, {
        precision: 0
      })).toEqual('1.000');
    });
    it('returns R$ 10.000,00 when unit is R$', function () {
      expect((0, _money.default)(10000000000, {
        unit: 'R$'
      })).toEqual('R$ 100.000.000,00');
    });
    it('returns 100,000,000,00 when delimiter is ","', function () {
      expect((0, _money.default)(10000000000, {
        delimiter: ','
      })).toEqual('100,000,000,00');
    });
    it('returns 100.000.000.00 when separator is "."', function () {
      expect((0, _money.default)(10000000000, {
        separator: '.'
      })).toEqual('100.000.000.00');
    });
    it('returns 100.000.000,00 when zeroCents is true', function () {
      expect((0, _money.default)(100000000, {
        zeroCents: true
      })).toEqual('100.000.000,00');
    });
    it('returns -3,75 when showSignal is true and given a float value', function () {
      expect((0, _money.default)(-375, {
        showSignal: true
      })).toEqual('-3,75');
    });
    it('returns -3,75 when showSignal is false and given a float value', function () {
      expect((0, _money.default)(-375, {
        showSignal: false
      })).toEqual('3,75');
    });
    it('returns -3,75 when showSignal is true and given a string value', function () {
      expect((0, _money.default)('-375', {
        showSignal: true
      })).toEqual('-3,75');
    });
  });
});