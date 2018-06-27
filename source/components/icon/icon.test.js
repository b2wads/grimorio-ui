import '../../../internals/test/helper';
import Icon from './index';


/** @test {Icon} */
describe('Svg component', function() {
  /** @test {Icon#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Icon />
    );

    it('Should output a icon', () => {
      assert.isOk(ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'svg'));
    });

  });
});
