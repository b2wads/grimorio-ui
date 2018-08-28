import '../../../internals/test/helper';

import Select from './select-component';

/** @test {Select} */
describe('Select component', () => {
/** @test {Select#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Select />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
