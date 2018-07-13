import '../../../internals/test/helper';

import Menu from './index';

/** @test {Menu} */
describe('Menu component', () => {
/** @test {Menu#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Menu />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
