import '../../../internals/test/helper';

import Tooltip from './tooltip-component';

/** @test {Tooltip} */
describe('Tooltip component', () => {
/** @test {Tooltip#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Tooltip message="hello" />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
