import '../../../internals/test/helper';

import Error from './error-component';

/** @test {Error} */
describe('Error component', () => {
/** @test {Error#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Error />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
