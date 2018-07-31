import { expect } from 'chai';
import { convertToBRL } from './money';

/** @test {Converter#convertToBRL} */
describe('Converter - convertToBRL', () => {
  it('should have invalid parameter', () => {
    expect(convertToBRL()).to.equal(false);
    expect(convertToBRL([])).to.equal(false);
    expect(convertToBRL({})).to.equal(false);
    expect(convertToBRL(null)).to.equal(false);
    expect(convertToBRL(undefined)).to.equal(false);
  });

  it('should have parameters VALUE as String', () => {
    expect(convertToBRL('')).to.equal('0,00');
    expect(convertToBRL('10009.89')).to.equal('10.009,89');
  });

  it('should have parameters VALUE as Number', () => {
    expect(convertToBRL(100)).to.equal('100,00');
    expect(convertToBRL(10009.89)).to.equal('10.009,89');
  });
});
