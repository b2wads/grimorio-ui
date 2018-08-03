"use strict";

var _chai = require("chai");

var _number = require("./number");

/** @test {Converter} */
describe('Converter', function () {
  /** @test {Converter#convertToFloat} */
  describe('Converter - convertToFloat', function () {
    it('should have invalid parameter', function () {
      (0, _chai.expect)((0, _number.convertToFloat)()).to.equal(false);
      (0, _chai.expect)((0, _number.convertToFloat)([])).to.equal(false);
      (0, _chai.expect)((0, _number.convertToFloat)({})).to.equal(false);
      (0, _chai.expect)((0, _number.convertToFloat)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.convertToFloat)(undefined)).to.equal(false);
    });
    it('should have parameter VALUE as String', function () {
      (0, _chai.expect)((0, _number.convertToFloat)('')).to.equal('');
      (0, _chai.expect)((0, _number.convertToFloat)('40,1')).to.equal(40.1);
      (0, _chai.expect)((0, _number.convertToFloat)('100')).to.equal(100);
    });
    it('should have parameters VALUE as Number', function () {
      (0, _chai.expect)((0, _number.convertToFloat)(40.1)).to.equal(40.1);
    });
  });
  /** @test {Converter#convertToDecimal} */

  describe('Converter - convertToDecimal', function () {
    it('should have invalid parameter', function () {
      (0, _chai.expect)((0, _number.convertToDecimal)()).to.equal(false);
      (0, _chai.expect)((0, _number.convertToDecimal)([])).to.equal(false);
      (0, _chai.expect)((0, _number.convertToDecimal)({})).to.equal(false);
      (0, _chai.expect)((0, _number.convertToDecimal)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.convertToDecimal)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _number.convertToDecimal)('40.1')).to.equal(false);
    });
    it('should have parameter VALUE as Number', function () {
      (0, _chai.expect)((0, _number.convertToDecimal)(40.1)).to.equal('40,1');
    });
    it('should have parameter VALUE as String with empty value', function () {
      (0, _chai.expect)((0, _number.convertToDecimal)('')).to.equal('');
    });
  });
  /** @test {Converter#convertToZeroFilled} */

  describe('Converter - convertToZeroFilled', function () {
    it('should have invalid parameter', function () {
      (0, _chai.expect)((0, _number.convertToZeroFilled)()).to.equal(false);
      (0, _chai.expect)((0, _number.convertToZeroFilled)([])).to.equal(false);
      (0, _chai.expect)((0, _number.convertToZeroFilled)({})).to.equal(false);
      (0, _chai.expect)((0, _number.convertToZeroFilled)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.convertToZeroFilled)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _number.convertToZeroFilled)(20, undefined)).to.equal(false);
    });
    it('should have parameter VALUE as Number and DIGITS as Number', function () {
      (0, _chai.expect)((0, _number.convertToZeroFilled)(40, 6)).to.equal('000040');
    });
    it('should have parameter VALUE as String and DIGITS as Number', function () {
      (0, _chai.expect)((0, _number.convertToZeroFilled)('40', 6)).to.equal('000040');
    });
  });
});