import '../../../internals/test/helper';

import Form from './index';

/** @test {Form} */
describe('Form component', () => {
/** @test {Form#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Form />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
