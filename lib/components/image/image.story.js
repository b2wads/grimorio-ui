"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Image', module);
stories.addDecorator(_addonKnobs.withKnobs);
var pathImage = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100';
stories.addWithInfo('size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    path: pathImage,
    size: "small"
  }), _react.default.createElement(_index.default, {
    path: pathImage,
    size: "medium"
  }), _react.default.createElement(_index.default, {
    path: pathImage,
    size: "large"
  }));
});
stories.addWithInfo('style', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    size: "small",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "small",
    circle: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "small",
    thumbnail: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    circle: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    thumbnail: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    circle: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    thumbnail: true,
    path: pathImage
  }));
});
stories.addWithInfo('align', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    size: "small",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    rounded: true,
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "small",
    circle: true,
    align: "center",
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    circle: true,
    align: "center",
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    circle: true,
    align: "center",
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "small",
    thumbnail: true,
    align: "right",
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "medium",
    thumbnail: true,
    align: "right",
    path: pathImage
  }), _react.default.createElement(_index.default, {
    size: "large",
    thumbnail: true,
    align: "right",
    path: pathImage
  }));
});