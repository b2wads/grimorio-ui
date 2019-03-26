import '../../../internals/test/helper';

import PieChart from './pie-chart-component';

/** @test {PieChart} */
describe('PieChart component', () => {
/** @test {PieChart#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = mount(
        <PieChart />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
