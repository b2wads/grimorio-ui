import '../../../internals/test/helper';

import Steps from './steps-component';

/** @test {Slider} */
describe('Slider component', () => {
  /** @test {Slider#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Steps />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
