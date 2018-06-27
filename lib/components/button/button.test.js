"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "default": "button_default_LxACI",
  "primary": "button_primary_3fZDM",
  "success": "button_success_20SM5",
  "info": "button_info_1T2Ft",
  "warning": "button_warning_2A4ox",
  "danger": "button_danger_3M9Fm",
  "undo": "button_undo_2Qe5s",
  "transparent": "button_transparent_vdrA2",
  "active": "button_active_3PErz",
  "outline": "button_outline_1rjoH",
  "mini": "button_mini_2S-j9",
  "small": "button_small_1V02U",
  "medium": "button_medium_mB3wy",
  "large": "button_large_1x_32",
  "none": "button_none_JTzIM",
  "block": "button_block_2wZhe",
  "rounded": "button_rounded_IBkZ8",
  "circle": "button_circle_2cFKf",
  "loading": "button_loading_3jTlC"
};
/** @test {Button} */

describe('Button component', function () {
  /** @test {Button#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, "Test"));
    it('Should output a button with text', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button'));
    });
    it('Should output a button with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.default));
    });
  });
});