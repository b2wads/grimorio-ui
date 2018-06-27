import '../../../internals/test/helper';
import List from './index';

import styles from './list.styl';

/** @test {List} */
describe('List component', function() {
  /** @test {List#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <List>
        <List.Item>List Item</List.Item>
      </List>
    );

    it('Should output a list with items', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ul'));
    });

    it('Should output a list with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.bordered));
    });
  });
});
