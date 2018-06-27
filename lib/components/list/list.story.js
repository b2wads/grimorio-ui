"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('List', module);
stories.addWithInfo('Bordered', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "bordered"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item"))));
});
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, null, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item"))));
});
stories.addWithInfo('Unstyled', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, null, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (unstyled)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (unstyled)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (unstyled)"))));
});
stories.addWithInfo('Disc', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "disc"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (disc)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (disc)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (disc)"))));
});
stories.addWithInfo('Circle', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "circle"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (circle)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (circle)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (circle)"))));
});
stories.addWithInfo('Decimal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "decimal"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal)"))));
});
stories.addWithInfo('Zebra', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "zebra"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item impar")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item par")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item impar")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item par"))));
});
stories.addWithInfo('WithSubItem', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "decimal"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal) com Sub Item"), _react.default.createElement(_index.default, {
    style: "disc"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (disc)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (disc)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (disc)")))), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal) com Sub Item"), _react.default.createElement(_index.default, {
    style: "circle"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (circle)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (circle)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (circle)")))), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "List Item (decimal) com Sub Item"), _react.default.createElement(_index.default, {
    style: "decimal"
  }, _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (decimal)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (decimal)")), _react.default.createElement(_index.default.Item, null, _react.default.createElement("span", null, "Sub Item (decimal)"))))));
});