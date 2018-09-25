import '../../../internals/test/helper';

import TablePanel from './table-panel-component';

/** @test {TablePanel} */
describe('TablePanel component', () => {
/** @test {TablePanel#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <TablePanel />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
