import '../../../internals/test/helper';

import { letterValidation, alphaNumericValidation } from './string';

/** @test {Validation#String} */
describe('Validation String', () => {
  /** @test {Validation#String#letterValidation} */
  describe('Validation String Letter', () => {
    it('should have parameters VALUE as String and MESSAGE as String', () => {
      expect(letterValidation('test', 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });

    it('should have parameters VALUE only letters', () => {
      expect(letterValidation('test 01', 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });

    it('should have parameters', () => {
      expect(letterValidation()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#alphaNumericValidation} */
  describe('Validation String Alphanumeric', () => {
    it('should have parameters VALUE as String and MESSAGE as String', () => {
      expect(alphaNumericValidation('test 02', 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });

    it('should have parameters VALUE only alphanumeric', () => {
      expect(letterValidation('test 01 @@@', 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });

    it('should have parameters', () => {
      expect(alphaNumericValidation()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});
