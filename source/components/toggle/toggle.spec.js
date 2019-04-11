import '../../../internals/test/helper';

import Toggle from './toggle-component';

/** @test {Toggle} */
describe('Toggle component', () => {
/** @test {Toggle#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Toggle />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
