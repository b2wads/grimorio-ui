"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _panelComponent = _interopRequireDefault(require("./panel-component"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Panel', module);
stories.addDecorator(_addonKnobs.withKnobs);
var options = {
  default: 'default',
  brand: 'brand'
};
stories.addWithInfo('Default', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_panelComponent.default, {
    type: (0, _addonKnobs.select)('Panel Type', options, 'default', '0'),
    header: "Title"
  }, _react.default.createElement("p", null, "Content"), _react.default.createElement(_button.default, null, "Send")));
});
stories.addWithInfo('Brand', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_panelComponent.default, {
    type: "brand",
    header: _react.default.createElement("div", {
      style: {
        height: 70,
        background: '#eee'
      }
    }, "Title")
  }, _react.default.createElement("p", null, "Content"), _react.default.createElement(_button.default, null, "Send")));
});