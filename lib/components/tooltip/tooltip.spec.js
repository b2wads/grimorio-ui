"use strict";

require("../../../internals/test/helper");

var _tooltipComponent = _interopRequireDefault(require("./tooltip-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Tooltip} */
describe('Tooltip component', function () {
  /** @test {Tooltip#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_tooltipComponent.default, {
        message: "hello"
      }));
      expect(wrapper.length).toEqual(1);
    });
  });
});