import '../../../internals/test/helper';

import Slider from './slider-component';

/** @test {Slider} */
describe('Slider component', () => {
/** @test {Slider#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Slider />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
