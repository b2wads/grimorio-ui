import '../../../internals/test/helper';

import moneyMask from './money';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#Money} */
  describe('Money Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(moneyMask(10000000000)).toEqual('100.000.000,00');
      expect(moneyMask('')).toEqual('0,00');
      expect(moneyMask({})).toEqual(false);
      expect(moneyMask([])).toEqual(false);
      expect(moneyMask(null)).toEqual(false);
      expect(moneyMask()).toEqual(false);
      expect(moneyMask(undefined)).toEqual(false);
      expect(moneyMask(true)).toEqual(false);
    });

    it('returns 0,10 when number is 10', () => {
      expect(moneyMask(10)).toEqual('0,10');
    });

    it('returns 1.000 when precision is 0', () => {
      expect(moneyMask(1000, {precision: 0})).toEqual('1.000');
    });

    it('returns R$ 10.000,00 when unit is R$', () => {
      expect(moneyMask(10000000000, {unit: 'R$'})).toEqual('R$ 100.000.000,00');
    });

    it('returns 100,000,000,00 when delimiter is ","', () => {
      expect(moneyMask(10000000000, {delimiter: ','})).toEqual('100,000,000,00');
    });

    it('returns 100.000.000.00 when separator is "."', () => {
      expect(moneyMask(10000000000, {separator: '.'})).toEqual('100.000.000.00');
    });

    it('returns 100.000.000,00 when zeroCents is true', () => {
      expect(moneyMask(100000000, {zeroCents: true})).toEqual('100.000.000,00');
    });

    it('returns -3,75 when showSignal is true and given a float value', () => {
      expect(moneyMask(-375, {showSignal: true})).toEqual('-3,75');
    });

    it('returns -3,75 when showSignal is false and given a float value', () => {
      expect(moneyMask(-375, {showSignal: false})).toEqual('3,75');
    });

    it('returns -3,75 when showSignal is true and given a string value', () => {
      expect(moneyMask('-375', {showSignal: true})).toEqual('-3,75');
    });
  });
});
