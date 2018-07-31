import { expect } from 'chai';
import alphaMask from './alpha';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#alpha} */
  describe('Alpha Mask', () => {
    it('should have parameter VALUE as String', () => {
      expect(alphaMask('test')).to.equal('test');
      expect(alphaMask('')).to.equal('');
      expect(alphaMask(1223)).to.equal(false);
      expect(alphaMask({})).to.equal(false);
      expect(alphaMask([])).to.equal(false);
      expect(alphaMask(null)).to.equal(false);
      expect(alphaMask()).to.equal(false);
      expect(alphaMask(undefined)).to.equal(false);
      expect(alphaMask(true)).to.equal(false);
    });

    it('should have contain only letters', () => {
      expect(alphaMask('122tes21t')).to.equal('test');
      expect(alphaMask('122t%%%es21t#')).to.equal('test');
      expect(alphaMask('___________')).to.equal('');
    });
  });
});
