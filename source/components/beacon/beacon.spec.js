import '../../../internals/test/helper';

import Beacon from './beacon-component';

/** @test {Beacon} */
describe('Beacon component', () => {
/** @test {Beacon#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Beacon />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
