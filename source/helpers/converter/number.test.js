import { expect } from 'chai';
import { convertToFloat, convertToDecimal, convertToZeroFilled } from './number';

/** @test {Converter} */
describe('Converter', () => {
  /** @test {Converter#convertToFloat} */
  describe('Converter - convertToFloat', () => {
    it('should have invalid parameter', () => {
      expect(convertToFloat()).to.equal(false);
      expect(convertToFloat([])).to.equal(false);
      expect(convertToFloat({})).to.equal(false);
      expect(convertToFloat(null)).to.equal(false);
      expect(convertToFloat(undefined)).to.equal(false);
    });

    it('should have parameter VALUE as String', () => {
      expect(convertToFloat('')).to.equal('');
      expect(convertToFloat('40,1')).to.equal(40.1);
      expect(convertToFloat('100')).to.equal(100);
    });

    it('should have parameters VALUE as Number', () => {
      expect(convertToFloat(40.1)).to.equal(40.1);
    });
  });
  /** @test {Converter#convertToDecimal} */
  describe('Converter - convertToDecimal', () => {
    it('should have invalid parameter', () => {
      expect(convertToDecimal()).to.equal(false);
      expect(convertToDecimal([])).to.equal(false);
      expect(convertToDecimal({})).to.equal(false);
      expect(convertToDecimal(null)).to.equal(false);
      expect(convertToDecimal(undefined)).to.equal(false);
      expect(convertToDecimal('40.1')).to.equal(false);
    });

    it('should have parameter VALUE as Number', () => {
      expect(convertToDecimal(40.1)).to.equal('40,1');
    });

    it('should have parameter VALUE as String with empty value', () => {
      expect(convertToDecimal('')).to.equal('');
    });
  });
  /** @test {Converter#convertToZeroFilled} */
  describe('Converter - convertToZeroFilled', () => {
    it('should have invalid parameter', () => {
      expect(convertToZeroFilled()).to.equal(false);
      expect(convertToZeroFilled([])).to.equal(false);
      expect(convertToZeroFilled({})).to.equal(false);
      expect(convertToZeroFilled(null)).to.equal(false);
      expect(convertToZeroFilled(undefined)).to.equal(false);
      expect(convertToZeroFilled(20, undefined)).to.equal(false);
    });

    it('should have parameter VALUE as Number and DIGITS as Number', () => {
      expect(convertToZeroFilled(40, 6)).to.equal('000040');
    });

    it('should have parameter VALUE as String and DIGITS as Number', () => {
      expect(convertToZeroFilled('40', 6)).to.equal('000040');
    });
  });
});
