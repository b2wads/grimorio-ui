import '../../../internals/test/helper';
import Form from './index';

import styles from './form.styl';

/** @test {Form} */
describe('Form component', function() {
  /** @test {Form#render} */
  describe('#render', () => {
    const noop = () => {};
    let instance = ReactTestUtils.renderIntoDocument(
      <Form onSubmit={noop} ></Form>
    );

    it('Should output a form', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'form'));
    });

    it('Should output a form with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.form));
    });
  });

  /** @test {Form#style} */
  describe('#style', () => {
    const noop = () => {};

    it('Should output a form with horizontal style', () => {
      let instance = ReactTestUtils.renderIntoDocument(
        <Form onSubmit={noop} style="horizontal"></Form>
      );
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.horizontal));
    });

    it('Should output a form with inline style', () => {
      let instance = ReactTestUtils.renderIntoDocument(
        <Form onSubmit={noop} style="inline"></Form>
      );
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.inline));
    });
  });
});
