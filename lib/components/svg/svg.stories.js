"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Svg', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('All', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    width: 48,
    height: 48,
    src: "logo/suba"
  }), "\xA0", _react.default.createElement(_index.default, {
    width: 48,
    height: 48
  }), "\xA0", _react.default.createElement(_index.default, {
    src: "555555555555555"
  }));
});