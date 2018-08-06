import '../../../internals/test/helper';

import patternMask from './pattern';

/** @test {Mask} */
describe('Mask', () => {
  /** @test {Mask#pattern} */
  describe('Pattern Mask', () => {
    it('should have parameters MASK as String and VALUE as String', () => {
      expect(patternMask('999.999.999-99', '99911111101')).toEqual('999.111.111-01');
      expect(patternMask('')).toEqual(false);
      expect(patternMask(1223)).toEqual(false);
      expect(patternMask({})).toEqual(false);
      expect(patternMask('999', {})).toEqual(false);
      expect(patternMask([])).toEqual(false);
      expect(patternMask('999', [])).toEqual(false);
      expect(patternMask(null)).toEqual(false);
      expect(patternMask('999', null)).toEqual(false);
      expect(patternMask()).toEqual(false);
      expect(patternMask('999')).toEqual(false);
      expect(patternMask(undefined)).toEqual(false);
      expect(patternMask(true)).toEqual(false);
      expect(patternMask('999', true)).toEqual(false);
    });

    it('returns "20/06/2017" pattern when mask is 99/99/9999 and input is 20062017', () => {
      expect(patternMask('99/99/9999', 20062017)).toEqual('20/06/2017');
    });

    it('returns "123.456.789-00" pattern when mask is 999.999.999-99 and input is 12345678900', () => {
      expect(patternMask('999.999.999-99', 12345678900)).toEqual('123.456.789-00');
    });

    it('returns "ABC-123" pattern when mask is AAA-999 and input is ABC123', () => {
      expect(patternMask('AAA-999', 'ABC123')).toEqual('ABC-123');
    });

    it('returns "(12) 345" pattern when mask is (99) 9999-9999 and input is 12345', () => {
      expect(patternMask('(99) 9999-9999', '12345')).toEqual('(12) 345');
    });
  });
});
