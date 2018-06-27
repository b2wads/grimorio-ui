"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "overlay": "modal_overlay_TIiyp",
  "show": "modal_show_2yeyO",
  "content": "modal_content_3d2Fd",
  "header": "modal_header_oOgae",
  "header-title": "modal_header-title_1j661",
  "body": "modal_body_3zASx",
  "footer": "modal_footer_dXQSW",
  "scaleUp": "modal_scaleUp_Ismyn",
  "slideFromRight": "modal_slideFromRight_1VwqR",
  "slideFromBottom": "modal_slideFromBottom_3NdRP",
  "newspaper": "modal_newspaper_rKtaZ",
  "fall": "modal_fall_3-Le1",
  "sideFall": "modal_sideFall_2oBR0",
  "flipHorizontalThreeD": "modal_flipHorizontalThreeD_1rh0X",
  "flipVerticalThreeD": "modal_flipVerticalThreeD_FbOrG",
  "signThreeD": "modal_signThreeD_3mPuP",
  "superScaled": "modal_superScaled_2RgIR",
  "rotateFromBottomThreeD": "modal_rotateFromBottomThreeD_26t2l",
  "rotateFromLeftThreeD": "modal_rotateFromLeftThreeD_3iK9R"
};
/** @test {Modal} */

describe('Modal component', function () {
  /** @test {Modal#render} */
  describe('#render', function () {
    var body = function body() {
      return React.createElement("div", null, React.createElement("strong", null, "ALIBABA"), React.createElement("em", null, "NADA"), React.createElement("span", null, "\xC9"));
    };

    var button = function button() {
      return React.createElement("div", null, "Ok");
    };

    var modal = {
      id: "".concat(new Date().getTime()),
      header: 'Termos',
      body: body(),
      footer: true,
      actionButton: button()
    };
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      data: modal
    }));
    it('Should output a modal with body', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 6);
    });
    it('Should output a modal with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.overlay));
    });
  });
});