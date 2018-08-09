"use strict";

require("../../../internals/test/helper");

var _string = require("./string");

/** @test {Validation#String} */
describe('Validation String', function () {
  /** @test {Validation#String#letterValidation} */
  describe('Validation String Letter', function () {
    it('should have parameters VALUE as String and MESSAGE as String', function () {
      expect((0, _string.letterValidation)('test', 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have parameters VALUE only letters', function () {
      expect((0, _string.letterValidation)('test 01', 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      expect((0, _string.letterValidation)()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#alphaNumericValidation} */

  describe('Validation String Alphanumeric', function () {
    it('should have parameters VALUE as String and MESSAGE as String', function () {
      expect((0, _string.alphaNumericValidation)('test 02', 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have parameters VALUE only alphanumeric', function () {
      expect((0, _string.letterValidation)('test 01 @@@', 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      expect((0, _string.alphaNumericValidation)()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});