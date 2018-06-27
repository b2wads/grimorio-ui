"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../form-label/index"));

var _formControl = _interopRequireDefault(require("../form-control"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('FormGroup', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, null, _react.default.createElement(_index2.default, null, "Nome:"), _react.default.createElement(_formControl.default, {
    placeholder: "Form group with input"
  }));
});
stories.addWithInfo('With id', function () {
  return _react.default.createElement(_index.default, {
    controlId: "test"
  }, _react.default.createElement(_index2.default, null, "Nome:"), _react.default.createElement(_formControl.default, {
    placeholder: "Form group with input"
  }));
});
stories.addWithInfo('With validation', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    validationState: "success"
  }, _react.default.createElement(_index2.default, null, "Nome:"), _react.default.createElement(_formControl.default, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  })), _react.default.createElement(_index.default, {
    validationState: "warning"
  }, _react.default.createElement(_index2.default, null, "Nome:"), _react.default.createElement(_formControl.default, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  })), _react.default.createElement(_index.default, {
    validationState: "error"
  }, _react.default.createElement(_index2.default, null, "Nome:"), _react.default.createElement(_formControl.default, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  }), _react.default.createElement("span", {
    className: "error"
  }, "testte")));
});