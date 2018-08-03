"use strict";

var _chai = require("chai");

var _alphaNumeric = _interopRequireDefault(require("./alpha-numeric"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#Alphanumeric} */
  describe('Alphanumeric Mask', function () {
    it('should have parameter VALUE as String', function () {
      (0, _chai.expect)((0, _alphaNumeric.default)('test123')).to.equal('test123');
      (0, _chai.expect)((0, _alphaNumeric.default)('')).to.equal('');
      (0, _chai.expect)((0, _alphaNumeric.default)(1223)).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)({})).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)([])).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)(null)).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)()).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _alphaNumeric.default)(true)).to.equal(false);
    });
    it('should have contain only letters and numbers', function () {
      (0, _chai.expect)((0, _alphaNumeric.default)('122tes21t')).to.equal('122tes21t');
      (0, _chai.expect)((0, _alphaNumeric.default)('122t%%%es21t#')).to.equal('122tes21t');
      (0, _chai.expect)((0, _alphaNumeric.default)('___________')).to.equal('');
    });
  });
});