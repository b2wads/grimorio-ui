import { expect } from 'chai';
import { numberMask, thousandMask, percentageMask } from './number';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#number} */
  describe('Number Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(numberMask('123')).to.equal('123');
      expect(numberMask('')).to.equal('');
      expect(numberMask(1223)).to.equal('1223');
      expect(numberMask({})).to.equal(false);
      expect(numberMask([])).to.equal(false);
      expect(numberMask(null)).to.equal(false);
      expect(numberMask()).to.equal(false);
      expect(numberMask(undefined)).to.equal(false);
      expect(numberMask(true)).to.equal(false);
    });

    it('should have contain only numbers', () => {
      expect(numberMask('122tes21t')).to.equal('12221');
      expect(numberMask('122t%%%es21t#')).to.equal('12221');
      expect(numberMask('___________')).to.equal('');
    });
  });
  /** @test {Mask#thousand} */
  describe('Thousand Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(thousandMask('1232')).to.equal('1.232');
      expect(thousandMask('')).to.equal('');
      expect(thousandMask(1223)).to.equal('1.223');
      expect(thousandMask({})).to.equal(false);
      expect(thousandMask([])).to.equal(false);
      expect(thousandMask(null)).to.equal(false);
      expect(thousandMask()).to.equal(false);
      expect(thousandMask(undefined)).to.equal(false);
      expect(thousandMask(true)).to.equal(false);
    });

    it('should have contain only numbers', () => {
      expect(thousandMask('122tes21t')).to.equal('12.221');
      expect(thousandMask('122t%%%es21t#')).to.equal('12.221');
      expect(thousandMask('___________')).to.equal('');
    });
  });

  /** @test {Mask#percentage} */
  describe('Percentage Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(percentageMask('231')).to.equal('23,1');
      expect(percentageMask('')).to.equal('');
      expect(percentageMask(1223)).to.equal('100');
      expect(percentageMask({})).to.equal(false);
      expect(percentageMask([])).to.equal(false);
      expect(percentageMask(null)).to.equal(false);
      expect(percentageMask()).to.equal(false);
      expect(percentageMask(undefined)).to.equal(false);
      expect(percentageMask(true)).to.equal(false);
    });

    it('should have contain only numbers', () => {
      expect(percentageMask('tes21t')).to.equal('21');
      expect(percentageMask('100t%%%est#')).to.equal('100');
      expect(percentageMask('89t%%%est1#')).to.equal('89,1');
      expect(percentageMask('891t%%%est2#')).to.equal('100');
      expect(percentageMask('___________')).to.equal('');
    });
  });
});
