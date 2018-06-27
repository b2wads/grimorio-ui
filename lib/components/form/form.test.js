"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "form": "form_form_308tD",
  "horizontal": "form_horizontal_2pUjA",
  "inline": "form_inline_2ffpW"
};
/** @test {Form} */

describe('Form component', function () {
  /** @test {Form#render} */
  describe('#render', function () {
    var noop = function noop() {};

    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      onSubmit: noop
    }));
    it('Should output a form', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'form'));
    });
    it('Should output a form with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.form));
    });
  });
  /** @test {Form#style} */

  describe('#style', function () {
    var noop = function noop() {};

    it('Should output a form with horizontal style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
        onSubmit: noop,
        style: "horizontal"
      }));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.horizontal));
    });
    it('Should output a form with inline style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
        onSubmit: noop,
        style: "inline"
      }));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.inline));
    });
  });
});