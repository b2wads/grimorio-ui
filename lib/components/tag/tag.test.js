"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "tag": "tag_tag_3RKSU",
  "tag-close": "tag_tag-close_9nIPM"
};
/** @test {Tag} */

describe('Tag component', function () {
  /** @test {Tag#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, "Test"));
    it('Should output a tag', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a tag with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.tag));
    });
  });
});