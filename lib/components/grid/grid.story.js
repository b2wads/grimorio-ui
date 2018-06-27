"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../grid-row/index"));

var _index3 = _interopRequireDefault(require("../grid-col/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Grid', module);
stories.addDecorator(_addonKnobs.withKnobs);
var style = {
  'backgroundColor': '#ccc',
  'border': '1px solid #999',
  'height': '40px'
};
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, null, _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1"), _react.default.createElement(_index3.default, {
    xs: 1,
    style: style
  }, "Grid 1")), _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2"), _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2"), _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2"), _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2"), _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2"), _react.default.createElement(_index3.default, {
    xs: 2,
    style: style
  }, "Grid 2")), _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 3,
    style: style
  }, "Grid 3"), _react.default.createElement(_index3.default, {
    xs: 3,
    style: style
  }, "Grid 3"), _react.default.createElement(_index3.default, {
    xs: 3,
    style: style
  }, "Grid 3"), _react.default.createElement(_index3.default, {
    xs: 3,
    style: style
  }, "Grid 3")), _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 4,
    style: style
  }, "Grid 4"), _react.default.createElement(_index3.default, {
    xs: 4,
    style: style
  }, "Grid 4"), _react.default.createElement(_index3.default, {
    xs: 4,
    style: style
  }, "Grid 4")), _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 6,
    style: style
  }, "Grid 6"), _react.default.createElement(_index3.default, {
    xs: 6,
    style: style
  }, "Grid 6")), _react.default.createElement(_index2.default, {
    start: 'xs'
  }, _react.default.createElement(_index3.default, {
    xs: 12,
    style: style
  }, "Grid 12")));
});