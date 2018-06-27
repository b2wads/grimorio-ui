"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../form-group/index"));

var _index3 = _interopRequireDefault(require("../form-label/index"));

var _index4 = _interopRequireDefault(require("../form-control/index"));

var _index5 = _interopRequireDefault(require("../form-actions/index"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Form', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {}
  }, _react.default.createElement(_index2.default, null, _react.default.createElement(_index3.default, null, "Example of label"), _react.default.createElement(_index4.default, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index5.default, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar")));
});
stories.addWithInfo('Inline', function () {
  return _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {},
    style: "inline"
  }, _react.default.createElement(_index2.default, null, _react.default.createElement(_index4.default, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index2.default, null, _react.default.createElement(_index4.default, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index5.default, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar")));
});
stories.addWithInfo('Horizontal', function () {
  return _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {},
    style: "horizontal"
  }, _react.default.createElement(_index2.default, null, _react.default.createElement(_index3.default, null, "Example of label"), _react.default.createElement(_index4.default, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index2.default, null, _react.default.createElement(_index3.default, null, "Example of label"), _react.default.createElement(_index4.default, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index5.default, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar")));
});