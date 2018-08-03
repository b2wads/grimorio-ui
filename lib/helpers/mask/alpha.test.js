"use strict";

var _chai = require("chai");

var _alpha = _interopRequireDefault(require("./alpha"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#alpha} */
  describe('Alpha Mask', function () {
    it('should have parameter VALUE as String', function () {
      (0, _chai.expect)((0, _alpha.default)('test')).to.equal('test');
      (0, _chai.expect)((0, _alpha.default)('')).to.equal('');
      (0, _chai.expect)((0, _alpha.default)(1223)).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)({})).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)([])).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)(null)).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)()).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _alpha.default)(true)).to.equal(false);
    });
    it('should have contain only letters', function () {
      (0, _chai.expect)((0, _alpha.default)('122tes21t')).to.equal('test');
      (0, _chai.expect)((0, _alpha.default)('122t%%%es21t#')).to.equal('test');
      (0, _chai.expect)((0, _alpha.default)('___________')).to.equal('');
    });
  });
});