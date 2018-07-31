import { expect } from 'chai';
import moneyMask from './money';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#Money} */
  describe('Money Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(moneyMask(10000000000)).to.equal('100.000.000,00');
      expect(moneyMask('')).to.equal('0,00');
      expect(moneyMask({})).to.equal(false);
      expect(moneyMask([])).to.equal(false);
      expect(moneyMask(null)).to.equal(false);
      expect(moneyMask()).to.equal(false);
      expect(moneyMask(undefined)).to.equal(false);
      expect(moneyMask(true)).to.equal(false);
    });

    it('returns 0,10 when number is 10', () => {
      expect(moneyMask(10)).to.equal('0,10');
    });

    it('returns 1.000 when precision is 0', () => {
      expect(moneyMask(1000, {precision: 0})).to.equal('1.000');
    });

    it('returns R$ 10.000,00 when unit is R$', () => {
      expect(moneyMask(10000000000, {unit: 'R$'})).to.equal('R$ 100.000.000,00');
    });

    it('returns 100,000,000,00 when delimiter is ","', () => {
      expect(moneyMask(10000000000, {delimiter: ','})).to.equal('100,000,000,00');
    });

    it('returns 100.000.000.00 when separator is "."', () => {
      expect(moneyMask(10000000000, {separator: '.'})).to.equal('100.000.000.00');
    });

    it('returns 100.000.000,00 when zeroCents is true', () => {
      expect(moneyMask(100000000, {zeroCents: true})).to.equal('100.000.000,00');
    });

    it('returns -3,75 when showSignal is true and given a float value', () => {
      expect(moneyMask(-375, {showSignal: true})).to.equal('-3,75');
    });

    it('returns -3,75 when showSignal is false and given a float value', () => {
      expect(moneyMask(-375, {showSignal: false})).to.equal('3,75');
    });

    it('returns -3,75 when showSignal is true and given a string value', () => {
      expect(moneyMask('-375', {showSignal: true})).to.equal('-3,75');
    });
  });
});
