import '../../../internals/test/helper';

import { convertToFloat, convertToDecimal, convertToZeroFilled } from './number';

/** @test {Converter} */
describe('Converter', () => {
  /** @test {Converter#convertToFloat} */
  describe('Converter - convertToFloat', () => {
    it('should have invalid parameter', () => {
      expect(convertToFloat()).toEqual(false);
      expect(convertToFloat([])).toEqual(false);
      expect(convertToFloat({})).toEqual(false);
      expect(convertToFloat(null)).toEqual(false);
      expect(convertToFloat(undefined)).toEqual(false);
    });

    it('should have parameter VALUE as String', () => {
      expect(convertToFloat('')).toEqual('');
      expect(convertToFloat('40,1')).toEqual(40.1);
      expect(convertToFloat('100')).toEqual(100);
    });

    it('should have parameters VALUE as Number', () => {
      expect(convertToFloat(40.1)).toEqual(40.1);
    });
  });
  /** @test {Converter#convertToDecimal} */
  describe('Converter - convertToDecimal', () => {
    it('should have invalid parameter', () => {
      expect(convertToDecimal()).toEqual(false);
      expect(convertToDecimal([])).toEqual(false);
      expect(convertToDecimal({})).toEqual(false);
      expect(convertToDecimal(null)).toEqual(false);
      expect(convertToDecimal(undefined)).toEqual(false);
      expect(convertToDecimal('40.1')).toEqual(false);
    });

    it('should have parameter VALUE as Number', () => {
      expect(convertToDecimal(40.1)).toEqual('40,1');
    });

    it('should have parameter VALUE as String with empty value', () => {
      expect(convertToDecimal('')).toEqual('');
    });
  });
  /** @test {Converter#convertToZeroFilled} */
  describe('Converter - convertToZeroFilled', () => {
    it('should have invalid parameter', () => {
      expect(convertToZeroFilled()).toEqual(false);
      expect(convertToZeroFilled([])).toEqual(false);
      expect(convertToZeroFilled({})).toEqual(false);
      expect(convertToZeroFilled(null)).toEqual(false);
      expect(convertToZeroFilled(undefined)).toEqual(false);
      expect(convertToZeroFilled(20, undefined)).toEqual(false);
    });

    it('shoul value when value param is empty string', () => {
      expect(convertToZeroFilled('')).toEqual('');
    })

    it('should have parameter VALUE as Number and DIGITS as Number', () => {
      expect(convertToZeroFilled(40, 6)).toEqual('000040');
    });

    it('should have parameter VALUE as String and DIGITS as Number', () => {
      expect(convertToZeroFilled('40', 6)).toEqual('000040');
    });
  });
});
