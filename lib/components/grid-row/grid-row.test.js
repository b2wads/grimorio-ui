"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "row": "grid-row_row_1tHcr",
  "reverse": "grid-row_reverse_IsQfh",
  "start-xs": "grid-row_start-xs_1lCKO",
  "center-xs": "grid-row_center-xs_2WLEO",
  "end-xs": "grid-row_end-xs_Yeift",
  "top-xs": "grid-row_top-xs_1V7kQ",
  "middle-xs": "grid-row_middle-xs_xQrJk",
  "bottom-xs": "grid-row_bottom-xs_3c1au",
  "around-xs": "grid-row_around-xs_6GR4n",
  "between-xs": "grid-row_between-xs_2jPAk",
  "first-xs": "grid-row_first-xs_BMC3R",
  "last-xs": "grid-row_last-xs_1l7LG",
  "start-sm": "grid-row_start-sm_3IuRb",
  "center-sm": "grid-row_center-sm_KYLkX",
  "end-sm": "grid-row_end-sm_1-ov7",
  "top-sm": "grid-row_top-sm_VDoyL",
  "middle-sm": "grid-row_middle-sm_16GX_",
  "bottom-sm": "grid-row_bottom-sm_2N9rM",
  "around-sm": "grid-row_around-sm_1U4x6",
  "between-sm": "grid-row_between-sm_1dp3P",
  "first-sm": "grid-row_first-sm_24q-a",
  "last-sm": "grid-row_last-sm_3bHxd",
  "start-md": "grid-row_start-md_31-ZN",
  "center-md": "grid-row_center-md_3swsz",
  "end-md": "grid-row_end-md_1FXOb",
  "top-md": "grid-row_top-md_vle7-",
  "middle-md": "grid-row_middle-md_XWYrw",
  "bottom-md": "grid-row_bottom-md_3HHl8",
  "around-md": "grid-row_around-md_3epkO",
  "between-md": "grid-row_between-md_1wHYy",
  "first-md": "grid-row_first-md_1YnJX",
  "last-md": "grid-row_last-md_2f2mk",
  "start-lg": "grid-row_start-lg_3NLkc",
  "center-lg": "grid-row_center-lg_Bc51d",
  "end-lg": "grid-row_end-lg_iWjTY",
  "top-lg": "grid-row_top-lg_1nrAZ",
  "middle-lg": "grid-row_middle-lg_HViiq",
  "bottom-lg": "grid-row_bottom-lg_3_mI_",
  "around-lg": "grid-row_around-lg_2pvjc",
  "between-lg": "grid-row_between-lg_16nNx",
  "first-lg": "grid-row_first-lg_2ILuT",
  "last-lg": "grid-row_last-lg_3lPZI"
};
/** @test {GridRow} */

describe('GridRow component', function () {
  /** @test {GridRow#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a grid row', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a grid row with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['row']));
    });
  });
});