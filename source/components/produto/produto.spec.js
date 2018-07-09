import '../../../internals/test/helper';

import Produto from './produto-component';

/** @test {Produto} */
describe('Produto component', () => {
/** @test {Produto#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Produto />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
