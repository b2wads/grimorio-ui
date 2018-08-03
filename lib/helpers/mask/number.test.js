"use strict";

var _chai = require("chai");

var _number = require("./number");

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#number} */
  describe('Number Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      (0, _chai.expect)((0, _number.numberMask)('123')).to.equal('123');
      (0, _chai.expect)((0, _number.numberMask)('')).to.equal('');
      (0, _chai.expect)((0, _number.numberMask)(1223)).to.equal('1223');
      (0, _chai.expect)((0, _number.numberMask)({})).to.equal(false);
      (0, _chai.expect)((0, _number.numberMask)([])).to.equal(false);
      (0, _chai.expect)((0, _number.numberMask)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.numberMask)()).to.equal(false);
      (0, _chai.expect)((0, _number.numberMask)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _number.numberMask)(true)).to.equal(false);
    });
    it('should have contain only numbers', function () {
      (0, _chai.expect)((0, _number.numberMask)('122tes21t')).to.equal('12221');
      (0, _chai.expect)((0, _number.numberMask)('122t%%%es21t#')).to.equal('12221');
      (0, _chai.expect)((0, _number.numberMask)('___________')).to.equal('');
    });
  });
  /** @test {Mask#thousand} */

  describe('Thousand Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      (0, _chai.expect)((0, _number.thousandMask)('1232')).to.equal('1.232');
      (0, _chai.expect)((0, _number.thousandMask)('')).to.equal('');
      (0, _chai.expect)((0, _number.thousandMask)(1223)).to.equal('1.223');
      (0, _chai.expect)((0, _number.thousandMask)({})).to.equal(false);
      (0, _chai.expect)((0, _number.thousandMask)([])).to.equal(false);
      (0, _chai.expect)((0, _number.thousandMask)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.thousandMask)()).to.equal(false);
      (0, _chai.expect)((0, _number.thousandMask)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _number.thousandMask)(true)).to.equal(false);
    });
    it('should have contain only numbers', function () {
      (0, _chai.expect)((0, _number.thousandMask)('122tes21t')).to.equal('12.221');
      (0, _chai.expect)((0, _number.thousandMask)('122t%%%es21t#')).to.equal('12.221');
      (0, _chai.expect)((0, _number.thousandMask)('___________')).to.equal('');
    });
  });
  /** @test {Mask#percentage} */

  describe('Percentage Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      (0, _chai.expect)((0, _number.percentageMask)('231')).to.equal('23,1');
      (0, _chai.expect)((0, _number.percentageMask)('')).to.equal('');
      (0, _chai.expect)((0, _number.percentageMask)(1223)).to.equal('100');
      (0, _chai.expect)((0, _number.percentageMask)({})).to.equal(false);
      (0, _chai.expect)((0, _number.percentageMask)([])).to.equal(false);
      (0, _chai.expect)((0, _number.percentageMask)(null)).to.equal(false);
      (0, _chai.expect)((0, _number.percentageMask)()).to.equal(false);
      (0, _chai.expect)((0, _number.percentageMask)(undefined)).to.equal(false);
      (0, _chai.expect)((0, _number.percentageMask)(true)).to.equal(false);
    });
    it('should have contain only numbers', function () {
      (0, _chai.expect)((0, _number.percentageMask)('tes21t')).to.equal('21');
      (0, _chai.expect)((0, _number.percentageMask)('100t%%%est#')).to.equal('100');
      (0, _chai.expect)((0, _number.percentageMask)('89t%%%est1#')).to.equal('89,1');
      (0, _chai.expect)((0, _number.percentageMask)('891t%%%est2#')).to.equal('100');
      (0, _chai.expect)((0, _number.percentageMask)('___________')).to.equal('');
    });
  });
});