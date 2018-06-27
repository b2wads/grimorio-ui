"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "decimal": "list_decimal_Djoyf",
  "circle": "list_circle_12faP",
  "disc": "list_disc_O0tNb",
  "unstyled": "list_unstyled_1bHNY",
  "list": "list_list_32t-L",
  "list-item": "list_list-item_3xPra",
  "bordered": "list_bordered_1Ay6C",
  "zebra": "list_zebra_UR4zo"
};
/** @test {List} */

describe('List component', function () {
  /** @test {List#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, React.createElement(_index.default.Item, null, "List Item")));
    it('Should output a list with items', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ul'));
    });
    it('Should output a list with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.bordered));
    });
  });
});