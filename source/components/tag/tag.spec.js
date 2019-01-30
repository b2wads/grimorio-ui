import '../../../internals/test/helper';

import Tag from './tag-component';

/** @test {Tag} */
describe('Tag component', () => {
/** @test {Tag#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Tag />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
