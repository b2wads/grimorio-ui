import '../../../internals/test/helper';

import Loader from './loader-component';

/** @test {Loader} */
describe('Loader component', () => {
  /** @test {Loader#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Loader
          type='full'
          color='secondary'
          background='black'
          size='18'
        />
      );
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
