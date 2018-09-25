import '../../../internals/test/helper';

import Loader from './loader-component';

/** @test {Loader} */
describe('Loader component', () => {
/** @test {Loader#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Loader />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
