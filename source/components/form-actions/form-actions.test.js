import '../../../internals/test/helper';
import FormActions from './index';

import styles from './form-actions.styl';

/** @test {FormActions} */
describe('FormActions component', function() {
  /** @test {FormActions#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <FormActions></FormActions>
    );

    it('Should output a form actions', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a form actions with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-group-actions']));
    });
  });
});
