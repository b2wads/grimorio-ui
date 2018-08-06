"use strict";

require("../../../internals/test/helper");

var _number = require("./number");

/** @test {Converter} */
describe('Converter', function () {
  /** @test {Converter#convertToFloat} */
  describe('Converter - convertToFloat', function () {
    it('should have invalid parameter', function () {
      expect((0, _number.convertToFloat)()).toEqual(false);
      expect((0, _number.convertToFloat)([])).toEqual(false);
      expect((0, _number.convertToFloat)({})).toEqual(false);
      expect((0, _number.convertToFloat)(null)).toEqual(false);
      expect((0, _number.convertToFloat)(undefined)).toEqual(false);
    });
    it('should have parameter VALUE as String', function () {
      expect((0, _number.convertToFloat)('')).toEqual('');
      expect((0, _number.convertToFloat)('40,1')).toEqual(40.1);
      expect((0, _number.convertToFloat)('100')).toEqual(100);
    });
    it('should have parameters VALUE as Number', function () {
      expect((0, _number.convertToFloat)(40.1)).toEqual(40.1);
    });
  });
  /** @test {Converter#convertToDecimal} */

  describe('Converter - convertToDecimal', function () {
    it('should have invalid parameter', function () {
      expect((0, _number.convertToDecimal)()).toEqual(false);
      expect((0, _number.convertToDecimal)([])).toEqual(false);
      expect((0, _number.convertToDecimal)({})).toEqual(false);
      expect((0, _number.convertToDecimal)(null)).toEqual(false);
      expect((0, _number.convertToDecimal)(undefined)).toEqual(false);
      expect((0, _number.convertToDecimal)('40.1')).toEqual(false);
    });
    it('should have parameter VALUE as Number', function () {
      expect((0, _number.convertToDecimal)(40.1)).toEqual('40,1');
    });
    it('should have parameter VALUE as String with empty value', function () {
      expect((0, _number.convertToDecimal)('')).toEqual('');
    });
  });
  /** @test {Converter#convertToZeroFilled} */

  describe('Converter - convertToZeroFilled', function () {
    it('should have invalid parameter', function () {
      expect((0, _number.convertToZeroFilled)()).toEqual(false);
      expect((0, _number.convertToZeroFilled)([])).toEqual(false);
      expect((0, _number.convertToZeroFilled)({})).toEqual(false);
      expect((0, _number.convertToZeroFilled)(null)).toEqual(false);
      expect((0, _number.convertToZeroFilled)(undefined)).toEqual(false);
      expect((0, _number.convertToZeroFilled)(20, undefined)).toEqual(false);
    });
    it('should have parameter VALUE as Number and DIGITS as Number', function () {
      expect((0, _number.convertToZeroFilled)(40, 6)).toEqual('000040');
    });
    it('should have parameter VALUE as String and DIGITS as Number', function () {
      expect((0, _number.convertToZeroFilled)('40', 6)).toEqual('000040');
    });
  });
});