import '../../../internals/test/helper';

import TableFixed from './table-fixed-component';

/** @test {TableFixed} */
describe('TableFixed component', () => {
/** @test {TableFixed#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <TableFixed />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
