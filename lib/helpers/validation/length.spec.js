"use strict";

require("../../../internals/test/helper");

var _length = require("./length");

/** @test {Validation#Length} */
describe('Validation Length', function () {
  /** @test {Validation#Length#minLengthValidation} */
  describe('Validation minLength', function () {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', function () {
      expect((0, _length.minLengthValidation)('test', 3, 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have value length > length ', function () {
      expect((0, _length.minLengthValidation)('te', 3, 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      expect((0, _length.minLengthValidation)()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#maxLengthValidation} */

  describe('Validation maxLength', function () {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', function () {
      console.log((0, _length.maxLengthValidation)('test 02', 100, 'error message'));
      expect((0, _length.maxLengthValidation)('test 02', 100, 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have value length < length ', function () {
      expect((0, _length.maxLengthValidation)('test', 3, 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      expect((0, _length.maxLengthValidation)()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});