import '../../../internals/test/helper';

import { minLengthValidation, maxLengthValidation } from './length';

/** @test {Validation#Length} */
describe('Validation Length', () => {
  /** @test {Validation#Length#minLengthValidation} */
  describe('Validation minLength', () => {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', () => {
      expect(minLengthValidation('test', 3, 'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });

    it('should have value length > length ', () => {
      expect(minLengthValidation('te', 3, 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });

    it('should have parameters', () => {
      expect(minLengthValidation()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
  /** @test {Validation#String#maxLengthValidation} */
  describe('Validation maxLength', () => {
    it('should have parameters VALUE as String, LENGTH as Number and MESSAGE as String', () => {
      console.log( maxLengthValidation('test 02', 100,  'error message') );
      expect(maxLengthValidation('test 02', 100,  'error message')).toEqual({
        validationState: 'success',
        errorMessage: undefined
      });
    });

    it('should have value length < length ', () => {
      expect(maxLengthValidation('test', 3, 'error message')).toEqual({
        validationState: 'error',
        errorMessage: 'error message'
      });
    });

    it('should have parameters', () => {
      expect(maxLengthValidation()).toEqual({
        validationState: undefined,
        errorMessage: undefined
      });
    });
  });
});
