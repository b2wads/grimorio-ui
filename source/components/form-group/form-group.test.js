import '../../../internals/test/helper';
import FormGroup from './index';

import styles from './form-group.styl';

/** @test {FormGroup} */
describe('FormGroup component', function() {
  /** @test {FormGroup#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormGroup></FormGroup>
    );

    it('Should output a form group', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a form group with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-group']));
    });
  });
});
