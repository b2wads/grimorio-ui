"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _gridCol = _interopRequireDefault(require("../grid-col"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('GridRow', module);
stories.addDecorator(_addonKnobs.withKnobs);
var style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, {
    start: 'xs'
  }, _react.default.createElement(_gridCol.default, {
    xs: 6,
    sm: 6,
    md: 6,
    style: style
  }, "Grid 6"));
});