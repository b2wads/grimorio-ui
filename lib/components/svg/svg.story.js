"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Svg', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    src: "logo/acom"
  }), _react.default.createElement(_index.default, {
    src: "logo/suba"
  }), _react.default.createElement(_index.default, {
    src: "logo/shop"
  }), _react.default.createElement(_index.default, {
    src: "logo/soub"
  }), _react.default.createElement(_index.default, {
    src: "logo/campaign-light"
  }), _react.default.createElement(_index.default, {
    src: "logo/spacey"
  }));
});