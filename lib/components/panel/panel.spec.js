"use strict";

require("../../../internals/test/helper");

var _panelComponent = _interopRequireDefault(require("./panel-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Panel} */
describe('Panel component', function () {
  /** @test {Panel#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_panelComponent.default, {
        header: "Title"
      }, React.createElement("p", null, "Content")));
      expect(wrapper.length).toEqual(1);
    });
  });
});