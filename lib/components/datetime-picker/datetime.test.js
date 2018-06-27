"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {DatetimePicker} */
describe('DatetimePicker component', function () {
  /** @test {DatetimePicker#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'H:mm',
      locale: "pt-br"
    }));
    it('Should output a datetime picker', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 4);
    }); //it('Should output a button with default style', () => {
    //  assert.isOk(ReactDOM.findDOMNode(instance).className.match(classes.rdt));
    //});
  });
});