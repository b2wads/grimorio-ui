import '../../../internals/test/helper';

import Product from './product-component';

/** @test {Product} */
describe('Product component', () => {
/** @test {Product#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Product />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
