import '../../../internals/test/helper';

import Beacon from './beacon-component';

/** @test {Breadcrumb} */
describe('Beacon component', () => {
/** @test {Breadcrumb#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Beacon />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
