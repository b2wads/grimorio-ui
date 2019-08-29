import '../../../internals/test/helper';

import Tab from './tab-component';

/** @test {Tab} */
describe('Tab component', () => {
/** @test {Tab#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Tab />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
