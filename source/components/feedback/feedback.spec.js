import '../../../internals/test/helper';

import Feedback from './feedback-component';

/** @test {Feedback} */
describe('Feedback component', () => {
  /** @test {Feedback#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Feedback />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
