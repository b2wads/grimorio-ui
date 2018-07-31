import { expect } from 'chai';
import numberValidation from './number';

/** @test {Validation#Number} */
describe('Validation Number', () => {
  it('should have parameters ITEM as String and MESSAGE as String', () => {
    expect(numberValidation('1212', 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters ITEM, MESSAGE and CHILD if an ARRAY of Objects', () => {
    expect(numberValidation([{ id: '1221' }], 'error message', 'id')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameter CHILD if an ARRAY of Objects', () => {
    expect(numberValidation([{ id: '1221' }], 'error message')).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });

  it('should have parameter ITEM with an ARRAY of Objects', () => {
    expect(numberValidation([], 'error message')).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });

  it('should have parameters ITEM as Number and MESSAGE as String', () => {
    expect(numberValidation(1212, 'error message')).to.deep.equal({
      validationState: 'success',
      errorMessage: undefined
    });
  });

  it('should have parameters ITEM as Number, String or Array', () => {
    expect(numberValidation({ id: '2121'}, 'error message')).to.deep.equal({
      validationState: 'error',
      errorMessage: 'error message'
    });
  });

  it('should have parameters', () => {
    expect(numberValidation()).to.deep.equal({
      validationState: undefined,
      errorMessage: undefined
    });
  });
});
