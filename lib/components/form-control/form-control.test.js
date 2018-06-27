"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "form-field": "form-control_form-field_3H-CU",
  "form-field--select": "form-control_form-field--select_2ylUj",
  "form-field--textarea": "form-control_form-field--textarea_2Gae7",
  "form-field--radio": "form-control_form-field--radio_PmGF0",
  "form-field--checkbox": "form-control_form-field--checkbox_HpvMl",
  "form-addon-before": "form-control_form-addon-before_ull0i",
  "form-addon-after": "form-control_form-addon-after_2uY_8",
  "form-addon": "form-control_form-addon_1Za5U",
  "form-addon--withItens": "form-control_form-addon--withItens_2lSDa",
  "form-addon--disabled": "form-control_form-addon--disabled_1i1YV",
  "form-feedback": "form-control_form-feedback_1vbcy"
};
/** @test {FormControl} */

describe('FormControl component', function () {
  /** @test {FormControl#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a form control', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a form control with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-addon']));
    });
  });
});