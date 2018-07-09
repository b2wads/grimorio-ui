import '../../../internals/test/helper';
import Svg from './index';

/** @test {Svg} */
describe('Svg component', function() {
  /** @test {Svg#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Svg />
    );

    it('Should output a svg', () => {
      assert.isOk(ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'svg'));
    });

  });
});
