import '../../../internals/test/helper';

import { convertToBRL } from './money';

/** @test {Converter#convertToBRL} */
describe('Converter - convertToBRL', () => {
  it('should have invalid parameter', () => {
    expect(convertToBRL()).toEqual(false);
    expect(convertToBRL([])).toEqual(false);
    expect(convertToBRL({})).toEqual(false);
    expect(convertToBRL(null)).toEqual(false);
    expect(convertToBRL(undefined)).toEqual(false);
  });

  it('should have parameters VALUE as String', () => {
    expect(convertToBRL('')).toEqual('0,00');
    expect(convertToBRL('10009.89')).toEqual('10.009,89');
  });

  it('should have parameters VALUE as Number', () => {
    expect(convertToBRL(100)).toEqual('100,00');
    expect(convertToBRL(10009.89)).toEqual('10.009,89');
  });
});
