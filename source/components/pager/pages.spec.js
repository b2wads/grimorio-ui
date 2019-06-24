import '../../../internals/test/helper';

import Pager from './pager-component';

/** @test {Pager} */
describe('Pager component', () => {
/** @test {Pager#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = mount(
        <Pager
          perpage={10}
          length={20}
          onLimitChange={() => {}}
          onClickPagination={() => {}}
          limitList={15}
          hasFirstLast
          hasPagination
        />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
