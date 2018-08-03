"use strict";

var _chai = require("chai");

var _pattern = _interopRequireDefault(require("./pattern"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#pattern} */
  describe('Pattern Mask', function () {
    it('should have parameters MASK as String and VALUE as String', function () {
      (0, _chai.expect)((0, _pattern.default)('999.999.999-99', '99911111101')).to.equal('999.111.111-01');
      (0, _chai.expect)((0, _pattern.default)('')).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)(1223)).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)({})).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)('999', {})).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)([])).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)('999', [])).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)(null)).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)('999', null)).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)()).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)('999')).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)(true)).to.equal(false);
      (0, _chai.expect)((0, _pattern.default)('999', true)).to.equal(false);
    });
    it('returns "20/06/2017" pattern when mask is 99/99/9999 and input is 20062017', function () {
      (0, _chai.expect)((0, _pattern.default)('99/99/9999', 20062017)).to.equal('20/06/2017');
    });
    it('returns "123.456.789-00" pattern when mask is 999.999.999-99 and input is 12345678900', function () {
      (0, _chai.expect)((0, _pattern.default)('999.999.999-99', 12345678900)).to.equal('123.456.789-00');
    });
    it('returns "ABC-123" pattern when mask is AAA-999 and input is ABC123', function () {
      (0, _chai.expect)((0, _pattern.default)('AAA-999', 'ABC123')).to.equal('ABC-123');
    });
    it('returns "(12) 345" pattern when mask is (99) 9999-9999 and input is 12345', function () {
      (0, _chai.expect)((0, _pattern.default)('(99) 9999-9999', '12345')).to.equal('(12) 345');
    });
  });
});