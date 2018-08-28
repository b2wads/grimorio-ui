import '../../../internals/test/helper';

import Breadcrumb from './breadcrumb-component';

/** @test {Breadcrumb} */
describe('Breadcrumb component', () => {
/** @test {Breadcrumb#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Breadcrumb />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
