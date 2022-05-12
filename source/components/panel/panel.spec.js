import '../../../internals/test/helper';

import Panel from './panel-component';

/** @test {Panel} */
describe('Panel component', () => {
/** @test {Panel#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Panel title="Title">
          <p>Content</p>
        </Panel>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
