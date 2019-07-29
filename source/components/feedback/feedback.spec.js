import '../../../internals/test/helper';

import Feedback from './feedback-component';

/** @test {PageTitle} */
describe('PageTitle component', () => {
  /** @test {PageTitle#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(<Feedback />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
