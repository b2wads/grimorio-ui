"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Icon', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, null), _react.default.createElement(_index.default, {
    name: "bars"
  }), _react.default.createElement(_index.default, {
    name: "arrows-alt"
  }), _react.default.createElement(_index.default, {
    name: "close"
  }), _react.default.createElement(_index.default, {
    name: "search"
  }), _react.default.createElement(_index.default, {
    name: "sort-desc"
  }), _react.default.createElement(_index.default, {
    name: "sort-asc"
  }), _react.default.createElement(_index.default, {
    name: "cog"
  }), _react.default.createElement(_index.default, {
    name: "book"
  }), _react.default.createElement(_index.default, {
    name: "image"
  }), _react.default.createElement(_index.default, {
    name: "table"
  }), _react.default.createElement(_index.default, {
    name: "plus"
  }), _react.default.createElement(_index.default, {
    name: "copy"
  }), _react.default.createElement(_index.default, {
    name: "pause"
  }), _react.default.createElement(_index.default, {
    name: "play"
  }), _react.default.createElement(_index.default, {
    name: "edit"
  }), _react.default.createElement(_index.default, {
    name: "trash"
  }), _react.default.createElement(_index.default, {
    name: "hourglass-2"
  }), _react.default.createElement(_index.default, {
    name: "chain"
  }), _react.default.createElement(_index.default, {
    name: "question"
  }), _react.default.createElement(_index.default, {
    name: "tag"
  }), _react.default.createElement(_index.default, {
    name: "th"
  }), _react.default.createElement(_index.default, {
    name: "home"
  }), _react.default.createElement(_index.default, {
    name: "warning"
  }), _react.default.createElement(_index.default, {
    name: "check"
  }), _react.default.createElement(_index.default, {
    name: "exit"
  }), _react.default.createElement(_index.default, {
    name: "info-circle"
  }), _react.default.createElement(_index.default, {
    name: "shield"
  }), _react.default.createElement(_index.default, {
    name: "calendar"
  }));
});
stories.addWithInfo('Size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    size: "4rem"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "bars"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "arrows-alt"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "close"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "search"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "sort-desc"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "sort-asc"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "cog"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "book"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "image"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "table"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "plus"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "copy"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "pause"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "play"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "edit"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "trash"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "hourglass-2"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "chain"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "question"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "tag"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "th"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "home"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "warning"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "check"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "exit"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "info-circle"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "shield"
  }), _react.default.createElement(_index.default, {
    size: "4rem",
    name: "calendar"
  }));
});
stories.addWithInfo('Color', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    color: "#ffcc00"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "bars"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "arrows-alt"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "close"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "search"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "sort-desc"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "sort-asc"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "cog"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "book"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "image"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "table"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "plus"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "copy"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "pause"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "play"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "edit"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "trash"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "hourglass-2"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "chain"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "question"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "tag"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "th"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "home"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "warning"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "check"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "exit"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "info-circle"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "shield"
  }), _react.default.createElement(_index.default, {
    color: "#ffcc00",
    name: "calendar"
  }));
});