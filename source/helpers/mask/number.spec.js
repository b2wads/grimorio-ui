import '../../../internals/test/helper';

import { numberMask, thousandMask, percentageMask } from './number';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#number} */
  describe('Number Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(numberMask('123')).toEqual('123');
      expect(numberMask('')).toEqual('');
      expect(numberMask(1223)).toEqual('1223');
      expect(numberMask({})).toEqual(false);
      expect(numberMask([])).toEqual(false);
      expect(numberMask(null)).toEqual(false);
      expect(numberMask()).toEqual(false);
      expect(numberMask(undefined)).toEqual(false);
      expect(numberMask(true)).toEqual(false);
    });

    it('should have contain only numbers', () => {
      expect(numberMask('122tes21t')).toEqual('12221');
      expect(numberMask('122t%%%es21t#')).toEqual('12221');
      expect(numberMask('___________')).toEqual('');
    });
  });
  /** @test {Mask#thousand} */
  describe('Thousand Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(thousandMask('1232')).toEqual('1.232');
      expect(thousandMask('')).toEqual('');
      expect(thousandMask(1223)).toEqual('1.223');
      expect(thousandMask({})).toEqual(false);
      expect(thousandMask([])).toEqual(false);
      expect(thousandMask(null)).toEqual(false);
      expect(thousandMask()).toEqual(false);
      expect(thousandMask(undefined)).toEqual(false);
      expect(thousandMask(true)).toEqual(false);
    });

    it('should have contain only numbers', () => {
      expect(thousandMask('122tes21t')).toEqual('12.221');
      expect(thousandMask('122t%%%es21t#')).toEqual('12.221');
      expect(thousandMask('___________')).toEqual('');
    });
  });

  /** @test {Mask#percentage} */
  describe('Percentage Mask', () => {
    it('should have parameter VALUE as String/Number', () => {
      expect(percentageMask('231')).toEqual('23,1');
      expect(percentageMask('')).toEqual('');
      expect(percentageMask(1223)).toEqual('100');
      expect(percentageMask({})).toEqual(false);
      expect(percentageMask([])).toEqual(false);
      expect(percentageMask(null)).toEqual(false);
      expect(percentageMask()).toEqual(false);
      expect(percentageMask(undefined)).toEqual(false);
      expect(percentageMask(true)).toEqual(false);
    });

    it('should have contain only numbers', () => {
      expect(percentageMask('tes21t')).toEqual('21');
      expect(percentageMask('100t%%%est#')).toEqual('100');
      expect(percentageMask('89t%%%est1#')).toEqual('89,1');
      expect(percentageMask('891t%%%est2#')).toEqual('100');
      expect(percentageMask('___________')).toEqual('');
    });
  });
});
