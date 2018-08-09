import '../../../internals/test/helper';

import alphaMask from './alpha';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#alpha} */
  describe('Alpha Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(alphaMask('test')).toEqual('test');
      expect(alphaMask('')).toEqual('');
      expect(alphaMask(1223)).toEqual(false);
      expect(alphaMask({})).toEqual(false);
      expect(alphaMask([])).toEqual(false);
      expect(alphaMask(null)).toEqual(false);
      expect(alphaMask()).toEqual(false);
      expect(alphaMask(undefined)).toEqual(false);
      expect(alphaMask(true)).toEqual(false);
    });

    it('should have contain only letters', () => {
      expect(alphaMask('122tes21t')).toEqual('test');
      expect(alphaMask('122t%%%es21t#')).toEqual('test');
      expect(alphaMask('___________')).toEqual('');
    });
  });
});
