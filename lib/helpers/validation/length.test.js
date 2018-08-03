"use strict";

var _chai = require("chai");

var _length = require("./length");

/** @test {Validation#Length} */
describe('Validation Length', function () {
  /** @test {Validation#Length#minLengthValidation} */
  describe('Validation minLength', function () {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', function () {
      (0, _chai.expect)((0, _length.minLengthValidation)('test', 3, 'error message')).to.deep.equal({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have value length > length ', function () {
      (0, _chai.expect)((0, _length.minLengthValidation)('te', 3, 'error message')).to.deep.equal({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      (0, _chai.expect)((0, _length.minLengthValidation)()).to.deep.equal({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#maxLengthValidation} */

  describe('Validation maxLength', function () {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', function () {
      (0, _chai.expect)((0, _length.maxLengthValidation)('test 02', 100, 'error message')).to.deep.equal({
        validationState: 'success',
        errorMessage: undefined
      });
    });
    it('should have value length < length ', function () {
      (0, _chai.expect)((0, _length.maxLengthValidation)('test', 3, 'error message')).to.deep.equal({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });
    it('should have parameters', function () {
      (0, _chai.expect)((0, _length.maxLengthValidation)()).to.deep.equal({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});