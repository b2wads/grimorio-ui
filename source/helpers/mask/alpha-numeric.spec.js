import '../../../internals/test/helper';

import alphaNumericMask from './alpha-numeric';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#Alphanumeric} */
  describe('Alphanumeric Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(alphaNumericMask('test123')).toEqual('test123');
      expect(alphaNumericMask('')).toEqual('');
      expect(alphaNumericMask(1223)).toEqual(false);
      expect(alphaNumericMask({})).toEqual(false);
      expect(alphaNumericMask([])).toEqual(false);
      expect(alphaNumericMask(null)).toEqual(false);
      expect(alphaNumericMask()).toEqual(false);
      expect(alphaNumericMask(undefined)).toEqual(false);
      expect(alphaNumericMask(true)).toEqual(false);
    });

    it('should have contain only letters and numbers', () => {
      expect(alphaNumericMask('122tes21t')).toEqual('122tes21t');
      expect(alphaNumericMask('122t%%%es21t#')).toEqual('122tes21t');
      expect(alphaNumericMask('122t%%%es21t#ABC')).toEqual('122tes21tABC');
      expect(alphaNumericMask('___________')).toEqual('');
    });
  });
});
