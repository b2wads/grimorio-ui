import '../../../internals/test/helper';

import PageTitle from './page-title-component';

/** @test {PageTitle} */
describe('PageTitle component', () => {
/** @test {PageTitle#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <PageTitle />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
