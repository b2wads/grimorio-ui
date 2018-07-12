"use strict";

require("../../../internals/test/helper");

var _iconComponent = _interopRequireDefault(require("./icon-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Icon} */
describe('Icon component', function () {
  /** @test {Icon#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_iconComponent.default, null));
      expect(wrapper.length).to.equal(1);
    });
  });
});