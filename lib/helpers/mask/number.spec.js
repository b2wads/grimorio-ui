"use strict";

require("../../../internals/test/helper");

var _number = require("./number");

/** @test {Mask} */
describe('Mask', function () {
  /** @test {Mask#number} */
  describe('Number Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      expect((0, _number.numberMask)('123')).toEqual('123');
      expect((0, _number.numberMask)('')).toEqual('');
      expect((0, _number.numberMask)(1223)).toEqual('1223');
      expect((0, _number.numberMask)({})).toEqual(false);
      expect((0, _number.numberMask)([])).toEqual(false);
      expect((0, _number.numberMask)(null)).toEqual(false);
      expect((0, _number.numberMask)()).toEqual(false);
      expect((0, _number.numberMask)(undefined)).toEqual(false);
      expect((0, _number.numberMask)(true)).toEqual(false);
    });
    it('should have contain only numbers', function () {
      expect((0, _number.numberMask)('122tes21t')).toEqual('12221');
      expect((0, _number.numberMask)('122t%%%es21t#')).toEqual('12221');
      expect((0, _number.numberMask)('___________')).toEqual('');
    });
  });
  /** @test {Mask#thousand} */

  describe('Thousand Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      expect((0, _number.thousandMask)('1232')).toEqual('1.232');
      expect((0, _number.thousandMask)('')).toEqual('');
      expect((0, _number.thousandMask)(1223)).toEqual('1.223');
      expect((0, _number.thousandMask)({})).toEqual(false);
      expect((0, _number.thousandMask)([])).toEqual(false);
      expect((0, _number.thousandMask)(null)).toEqual(false);
      expect((0, _number.thousandMask)()).toEqual(false);
      expect((0, _number.thousandMask)(undefined)).toEqual(false);
      expect((0, _number.thousandMask)(true)).toEqual(false);
    });
    it('should have contain only numbers', function () {
      expect((0, _number.thousandMask)('122tes21t')).toEqual('12.221');
      expect((0, _number.thousandMask)('122t%%%es21t#')).toEqual('12.221');
      expect((0, _number.thousandMask)('___________')).toEqual('');
    });
  });
  /** @test {Mask#percentage} */

  describe('Percentage Mask', function () {
    it('should have parameter VALUE as String/Number', function () {
      expect((0, _number.percentageMask)('231')).toEqual('23,1');
      expect((0, _number.percentageMask)('')).toEqual('');
      expect((0, _number.percentageMask)(1223)).toEqual('100');
      expect((0, _number.percentageMask)({})).toEqual(false);
      expect((0, _number.percentageMask)([])).toEqual(false);
      expect((0, _number.percentageMask)(null)).toEqual(false);
      expect((0, _number.percentageMask)()).toEqual(false);
      expect((0, _number.percentageMask)(undefined)).toEqual(false);
      expect((0, _number.percentageMask)(true)).toEqual(false);
    });
    it('should have contain only numbers', function () {
      expect((0, _number.percentageMask)('tes21t')).toEqual('21');
      expect((0, _number.percentageMask)('100t%%%est#')).toEqual('100');
      expect((0, _number.percentageMask)('89t%%%est1#')).toEqual('89,1');
      expect((0, _number.percentageMask)('891t%%%est2#')).toEqual('100');
      expect((0, _number.percentageMask)('___________')).toEqual('');
    });
  });
});