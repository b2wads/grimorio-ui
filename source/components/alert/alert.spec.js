import '../../../internals/test/helper';

import Alert from './alert-component';

/** @test {Alert} */
describe('Alert component', () => {
/** @test {Alert#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Alert />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
