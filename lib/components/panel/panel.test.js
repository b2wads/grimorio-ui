"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "panel": "panel_panel_-J8sM",
  "panel-header": "panel_panel-header_1BpFC",
  "panel-content": "panel_panel-content_1599P",
  "panel-content--scroll": "panel_panel-content--scroll_3KQps",
  "panel-footer": "panel_panel-footer_2RnXl",
  "panel-footer-info": "panel_panel-footer-info_2nxd_",
  "panel-footer-addon": "panel_panel-footer-addon_3hqrr"
};
/** @test {Panel} */

describe('Panel component', function () {
  /** @test {Panel#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, "Test"));
    it('Should output a panel', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'section'));
    });
    it('Should output a panel with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.panel));
    });
  });
});