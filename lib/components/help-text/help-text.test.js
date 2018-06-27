"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "help-text": "help-text_help-text_vNdke"
};
/** @test {HelpText} */

describe('HelpText component', function () {
  /** @test {HelpText#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, "Test"));
    it('Should output a help text', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
    });
    it('Should output a help text with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['help-text']));
    });
  });
});