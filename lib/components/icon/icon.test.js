"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Icon} */
describe('Svg component', function () {
  /** @test {Icon#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null));
    it('Should output a icon', function () {
      assert.isOk(ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'svg'));
    });
  });
});