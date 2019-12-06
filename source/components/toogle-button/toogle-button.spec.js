import '../../../internals/test/helper';

import ToogleButton from './toogle-button-component';

/** @test {ToogleButton} */
describe('ToogleButton component', () => {
/** @test {ToogleButton#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <ToogleButton />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
