import '../../../internals/test/helper';

import LineGraph from './line-graph-component';

/** @test {LineGraph} */
describe('LineGraph component', () => {
/** @test {LineGraph#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <LineGraph />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
