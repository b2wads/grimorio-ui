import '../../../internals/test/helper';

import Panel from './panel-component';

/** @test {Panel} */
describe('Panel component', () => {
/** @test {Panel#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Panel header="Title">
          <p>Content</p>
        </Panel>
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
