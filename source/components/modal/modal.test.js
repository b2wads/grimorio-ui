import '../../../internals/test/helper';
import Modal from './index';

import styles from './modal.styl';

/** @test {Modal} */
describe('Modal component', function() {
  /** @test {Modal#render} */
  describe('#render', () => {
    const body = () => {
      return (
        <div>
          <strong>ALIBABA</strong><em>NADA</em><span>É</span>
        </div>
      );
    };

    const button = () => {
      return (
        <div>Ok</div>
      );
    };

    const modal = {
      id: `${(new Date()).getTime()}`,
      header: 'Termos',
      body: body(),
      footer: true,
      actionButton: button()
    };

    let instance = ReactTestUtils.renderIntoDocument(
      <Modal data={modal} />
    );

    it('Should output a modal with body', () => {
      let divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 6);
    });

    it('Should output a modal with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.overlay));
    });
  });
});
