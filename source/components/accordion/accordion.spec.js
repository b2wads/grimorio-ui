import '../../../internals/test/helper';

import Accordion from './index';

/** @test {Accordion} */
describe('Accordion component', () => {
/** @test {Accordion#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Accordion />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
