import '../../../internals/test/helper';

import Sidebar from './sidebar-component';

/** @test {Sidebar} */
describe('Sidebar component', () => {
/** @test {Sidebar#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Sidebar>
          <p>Content</p>
        </Sidebar>
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
