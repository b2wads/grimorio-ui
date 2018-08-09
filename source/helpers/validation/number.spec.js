import '../../../internals/test/helper';

import numberValidation from './number';

/** @test {Validation#Number} */
describe('Validation Number', () => {
  it('should have parameters ITEM as String and MESSAGE as String', () => {
    expect(numberValidation('1212', 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters ITEM as Number and MESSAGE as String', () => {
    expect(numberValidation(1212, 'error message')).toEqual({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters', () => {
    expect(numberValidation()).toEqual({
      validationState: undefined,
      errorMessage: undefined
    });
  });
});
