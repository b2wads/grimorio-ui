import '../../../internals/test/helper';

import Button from './index';

/** @test {Button} */
describe('Button component', () => {
/** @test {Button#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Button />
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
