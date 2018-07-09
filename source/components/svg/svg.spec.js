import '../../../internals/test/helper';

import Svg from './index';

/** @test {Svg} */
describe('Button component', () => {
/** @test {Svg#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Svg />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
