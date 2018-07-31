import { expect } from 'chai';
import alphaNumericMask from './alpha-numeric';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#Alphanumeric} */
  describe('Alphanumeric Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(alphaNumericMask('test123')).to.equal('test123');
      expect(alphaNumericMask('')).to.equal('');
      expect(alphaNumericMask(1223)).to.equal(false);
      expect(alphaNumericMask({})).to.equal(false);
      expect(alphaNumericMask([])).to.equal(false);
      expect(alphaNumericMask(null)).to.equal(false);
      expect(alphaNumericMask()).to.equal(false);
      expect(alphaNumericMask(undefined)).to.equal(false);
      expect(alphaNumericMask(true)).to.equal(false);
    });

    it('should have contain only letters and numbers', () => {
      expect(alphaNumericMask('122tes21t')).to.equal('122tes21t');
      expect(alphaNumericMask('122t%%%es21t#')).to.equal('122tes21t');
      expect(alphaNumericMask('___________')).to.equal('');
    });
  });
});
