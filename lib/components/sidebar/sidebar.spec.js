"use strict";

require("../../../internals/test/helper");

var _sidebarComponent = _interopRequireDefault(require("./sidebar-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Sidebar} */
describe('Sidebar component', function () {
  /** @test {Sidebar#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_sidebarComponent.default, null, React.createElement("p", null, "Content")));
      expect(wrapper.length).toEqual(1);
    });
  });
});