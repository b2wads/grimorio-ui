"use strict";

var _chai = require("chai");

var _string = require("./string");

/** @test {Validation#String} */
describe('Validation String', function () {
  /** @test {Validation#String#letterValidation} */
  describe('Validation String Letter', function () {
    it('should have parameters VALUE as String and MESSAGE as String', function () {
      (0, _chai.expect)((0, _string.letterValidation)('test', 'error message')).to.deep.equal({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have parameters VALUE only letters', function () {
      (0, _chai.expect)((0, _string.letterValidation)('test 01', 'error message')).to.deep.equal({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      (0, _chai.expect)((0, _string.letterValidation)()).to.deep.equal({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#alphaNumericValidation} */

  describe('Validation String Alphanumeric', function () {
    it('should have parameters VALUE as String and MESSAGE as String', function () {
      (0, _chai.expect)((0, _string.alphaNumericValidation)('test 02', 'error message')).to.deep.equal({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have parameters VALUE only alphanumeric', function () {
      (0, _chai.expect)((0, _string.letterValidation)('test 01 @@@', 'error message')).to.deep.equal({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      (0, _chai.expect)((0, _string.alphaNumericValidation)()).to.deep.equal({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});