import '../../../internals/test/helper';

import Table from './table-component';

/** @test {Table} */
describe('Table component', () => {
/** @test {Table#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Table />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
