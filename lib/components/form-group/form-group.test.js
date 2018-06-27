"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "form-group": "form-group_form-group_3tfZN",
  "form-group--checkbox": "form-group_form-group--checkbox_3T9EY",
  "form-group--radio": "form-group_form-group--radio_2-aLB",
  "form-group--withoutTopLabel": "form-group_form-group--withoutTopLabel_3cKjL",
  "has-success": "form-group_has-success_3ftE8",
  "has-warning": "form-group_has-warning_2l1ly",
  "has-error": "form-group_has-error_rw7mm"
};
/** @test {FormGroup} */

describe('FormGroup component', function () {
  /** @test {FormGroup#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a form group', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a form group with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-group']));
    });
  });
});