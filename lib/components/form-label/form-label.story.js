"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _formGroup = _interopRequireDefault(require("../form-group"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('FormLabel', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_formGroup.default, null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, null, "Nome:"));
});
stories.addWithInfo('Addon text', function () {
  return _react.default.createElement(_formGroup.default, null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    addon: 'text'
  }, "Nome:"));
});
stories.addWithInfo('Addon link', function () {
  return _react.default.createElement(_formGroup.default, null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    addon: _react.default.createElement("a", {
      href: "/home"
    }, "Esqueci a minha senha")
  }, "Nome:"));
});