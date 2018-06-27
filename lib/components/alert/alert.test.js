"use strict";

require("../../../internals/test/helper");

var _index = _interopRequireDefault(require("./index"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  "success": "alert_success_8Yl7R",
  "info": "alert_info_3Y_9k",
  "warning": "alert_warning_3eAmw",
  "danger": "alert_danger_2XLXk",
  "alert--dark": "alert_alert--dark_2ieUN",
  "headline": "alert_headline_9GpE3",
  "body": "alert_body_3fjkv",
  "msgContainer": "alert_msgContainer_2IaRv",
  "alert--icon": "alert_alert--icon_d-QKa",
  "close": "alert_close_hMYKH",
  "icon": "alert_icon_3Y-aN"
};
/** @test {Alert} */

describe('Alert component', function () {
  /** @test {Alert#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, null, React.createElement("p", null, "Teste")));
    it('Should output a alert with message', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'p'));
    });
    it('Should output a alert with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.info));
    });
  });
  /** @test {Alert#style} */

  describe('#style', function () {
    it('Should have a alert with success style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
        type: "success"
      }, React.createElement("p", null, "Teste")));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.success));
    });
    it('Should have a alert with warning style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
        type: "warning"
      }, React.createElement("p", null, "Teste")));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.warning));
    });
    it('Should have a alert with danger style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
        type: "danger"
      }, React.createElement("p", null, "Teste")));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.danger));
    });
  });
  /** @test {Alert#icon} */

  describe('#icon', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      showIcon: true
    }, React.createElement("p", null, "Teste")));
    it('Should output a alert with icon', function () {
      var icon = ReactTestUtils.scryRenderedComponentsWithType(instance, _icon.default);
      assert.equal(icon.length, 1);
    });
    it('Should have className', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['alert--icon']));
    });
    it('Should output a alert with icon and default style', function () {
      var icon = ReactTestUtils.findRenderedComponentWithType(instance, _icon.default);
      assert.equal(icon.props.name, 'info-circle');
    });
  });
  /** @test {Alert#dismiss} */

  describe('#dismiss', function () {
    var doneOp = function doneOp() {};

    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      onDismiss: doneOp
    }, React.createElement("p", null, "Teste")));
    it('Should output a alert with onDismiss', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button'));
    });
    it('Should have dismissable style with onDismiss', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.dismissable));
    });
  });
  /** @test {Alert#dark} */

  describe('#dark', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      dark: true
    }, React.createElement("p", null, "Teste")));
    it('Should have dark style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['alert--dark']));
    });
  });
  /** @test {Alert#headline} */

  describe('#headline', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index.default, {
      headline: "Teste"
    }, React.createElement("p", null, "Testando")));
    it('Should output a alert with headline', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'h4'));
    });
  });
});