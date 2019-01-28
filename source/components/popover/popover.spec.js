import '../../../internals/test/helper';

import Popover from './popover-component';

/** @test {Popover} */
describe('Popover component', () => {
/** @test {Popover#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Popover />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
