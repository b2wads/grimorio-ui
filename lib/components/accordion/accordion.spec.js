"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Accordion} */
describe('Accordion component', function () {
  /** @test {Accordion#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = shallow(React.createElement(_index.default, null));
      expect(wrapper.length).toEqual(1);
    });
  });
});