"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "container-fluid": "grid_container-fluid_NZ2Lr",
  "container": "grid_container_Bjs6U"
};
/** @test {Grid} */

describe('Grid component', function () {
  /** @test {Grid#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a grid', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
    it('Should output a grid with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['container']));
    });
  });
});