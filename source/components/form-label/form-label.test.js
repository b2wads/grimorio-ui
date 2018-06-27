import '../../../internals/test/helper';
import FormLabel from './index';

import styles from './form-label.styl';

/** @test {FormLabel} */
describe('FormLabel component', function() {
  /** @test {FormLabel#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormLabel>Nome</FormLabel>
    );

    it('Should output a form label', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'label'));
    });

    it('Should output a form label with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.label));
    });
  });
});
