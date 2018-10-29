import '../../../internals/test/helper';

import LinkGenerator from './link-generator-component';

/** @test {LinkGenerator} */
describe('LinkGenerator component', () => {
/** @test {LinkGenerator#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <LinkGenerator />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
