"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('GridCol', module);
stories.addDecorator(_addonKnobs.withKnobs);
var style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, {
    xs: 1,
    style: style
  }, "Grid 1");
});