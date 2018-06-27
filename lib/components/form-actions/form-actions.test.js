"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "form-group-actions": "form-actions_form-group-actions_18fZG"
};
/** @test {FormActions} */

describe('FormActions component', function () {
  /** @test {FormActions#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a form actions', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a form actions with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-group-actions']));
    });
  });
});