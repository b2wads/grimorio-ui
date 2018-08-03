"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _tooltipComponent = _interopRequireDefault(require("./tooltip-component"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Tooltip', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", {
    style: {
      paddingLeft: '20%'
    }
  }, _react.default.createElement(_tooltipComponent.default, {
    message: "Tooltip"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_tooltipComponent.default, {
    message: "Tooltip",
    position: "bottom"
  }, "Bottom"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_tooltipComponent.default, {
    position: "bottom",
    width: "450px",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_tooltipComponent.default, {
    message: "Tooltip",
    icon: "remove_red_eye",
    position: "left"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_tooltipComponent.default, {
    message: "Tooltip",
    position: "right"
  }, _react.default.createElement(_button.default, null, "Info")));
});