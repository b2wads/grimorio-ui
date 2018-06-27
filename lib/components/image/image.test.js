"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "center": "image_center_3-jW5",
  "right": "image_right_2r8pX",
  "small": "image_small_3FbHv",
  "medium": "image_medium_1PCrJ",
  "large": "image_large_3nUFy",
  "circle": "image_circle_3Zqib",
  "rounded": "image_rounded_25pM_",
  "thumbnail": "image_thumbnail_2O6h2"
};
/** @test {Image} */

describe('Image component', function () {
  /** @test {Image#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      path: 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100'
    }));
    it('Should output an image', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'figure'));
    });
    it('Should output an image with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.left));
    });
  });
});