"use strict";

var _chai = require("chai");

var _money = _interopRequireDefault(require("./money"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#Money} */
  describe('Money Mask', function () {
    it('should have parameter VALUE as String', function () {
      (0, _chai.expect)((0, _money.default)(10000000000)).to.equal('100.000.000,00');
      (0, _chai.expect)((0, _money.default)('')).to.equal('0,00');
      (0, _chai.expect)((0, _money.default)({})).to.equal(false);
      (0, _chai.expect)((0, _money.default)([])).to.equal(false);
      (0, _chai.expect)((0, _money.default)(null)).to.equal(false);
      (0, _chai.expect)((0, _money.default)()).to.equal(false);
      (0, _chai.expect)((0, _money.default)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _money.default)(true)).to.equal(false);
    });
    it('returns 0,10 when number is 10', function () {
      (0, _chai.expect)((0, _money.default)(10)).to.equal('0,10');
    });
    it('returns 1.000 when precision is 0', function () {
      (0, _chai.expect)((0, _money.default)(1000, {
        precision: 0
      })).to.equal('1.000');
    });
    it('returns R$ 10.000,00 when unit is R$', function () {
      (0, _chai.expect)((0, _money.default)(10000000000, {
        unit: 'R$'
      })).to.equal('R$ 100.000.000,00');
    });
    it('returns 100,000,000,00 when delimiter is ","', function () {
      (0, _chai.expect)((0, _money.default)(10000000000, {
        delimiter: ','
      })).to.equal('100,000,000,00');
    });
    it('returns 100.000.000.00 when separator is "."', function () {
      (0, _chai.expect)((0, _money.default)(10000000000, {
        separator: '.'
      })).to.equal('100.000.000.00');
    });
    it('returns 100.000.000,00 when zeroCents is true', function () {
      (0, _chai.expect)((0, _money.default)(100000000, {
        zeroCents: true
      })).to.equal('100.000.000,00');
    });
    it('returns -3,75 when showSignal is true and given a float value', function () {
      (0, _chai.expect)((0, _money.default)(-375, {
        showSignal: true
      })).to.equal('-3,75');
    });
    it('returns -3,75 when showSignal is false and given a float value', function () {
      (0, _chai.expect)((0, _money.default)(-375, {
        showSignal: false
      })).to.equal('3,75');
    });
    it('returns -3,75 when showSignal is true and given a string value', function () {
      (0, _chai.expect)((0, _money.default)('-375', {
        showSignal: true
      })).to.equal('-3,75');
    });
  });
});