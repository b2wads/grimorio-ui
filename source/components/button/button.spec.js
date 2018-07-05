import '../../../internals/test/helper';
import Button from './index';

import styles from './button.styl';

/** @test {Button} */
describe('Button component', function() {
  /** @test {Button#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Button>Test</Button>
    );

    it('Should output a button with text', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button'));
    });

    it('Should output a button with primary style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.primary));
    });
  });
});
