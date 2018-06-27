import '../../../internals/test/helper';
import Tag from './index';

import styles from './tag.styl';

/** @test {Tag} */
describe('Tag component', function() {
  /** @test {Tag#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Tag>Test</Tag>
    );

    it('Should output a tag', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a tag with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.tag));
    });
  });
});
