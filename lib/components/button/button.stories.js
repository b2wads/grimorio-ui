"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
var stories = (0, _react2.storiesOf)('Button', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Style', "\n    This is the basic usage with the button.\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "primary",
    className: "teste"
  }, "Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary"
  }, _react.default.createElement(_icon.default, {
    size: 18
  }), " Primary Icon"), "\xA0", _react.default.createElement(_index.default, {
    style: "secondary"
  }, "Secondary"), "\xA0", _react.default.createElement(_index.default, {
    disabled: true
  }, "Disabled"), "\xA0", _react.default.createElement(_index.default, {
    style: "clean",
    size: "small"
  }, "Clean"), "\xA0", _react.default.createElement(_index.default, {
    style: "clean",
    size: "small"
  }, "Clean Icon ", _react.default.createElement(_icon.default, {
    size: 18
  })), "\xA0");
});
stories.addWithInfo('Disabled', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "primary",
    disabled: (0, _addonKnobs.boolean)('Disabled', true)
  }, (0, _addonKnobs.text)('Primary', 'Primary')), "\xA0", _react.default.createElement(_index.default, {
    style: "secondary",
    disabled: (0, _addonKnobs.boolean)('Disabled', true)
  }, (0, _addonKnobs.text)('Secondary', 'Secondary')), "\xA0", _react.default.createElement(_index.default, {
    style: "clean",
    size: "small",
    disabled: (0, _addonKnobs.boolean)('Disabled', true)
  }, (0, _addonKnobs.text)('Clean', 'Clean')), "\xA0");
});
stories.addWithInfo('States', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "primary"
  }, "Normal"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    disabled: true
  }, "Disabled"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    active: true
  }, "Active"));
});
stories.addWithInfo('Size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    size: "small"
  }, "Small"), "\xA0", _react.default.createElement(_index.default, null, "Medium"), "\xA0", _react.default.createElement(_index.default, {
    style: "secondary"
  }, "Medium"), "\xA0", _react.default.createElement(_index.default, {
    style: "secondary",
    size: "small"
  }, "Small"), "\xA0");
});
stories.addWithInfo('With icon', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    style: "primary"
  }, _react.default.createElement(_icon.default, {
    size: 18
  }), " Primary Medium"), "\xA0", _react.default.createElement(_index.default, {
    style: "secondary",
    size: "small"
  }, "Secondary Small ", _react.default.createElement(_icon.default, {
    name: "link",
    size: 18
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "clean",
    size: "small"
  }, _react.default.createElement(_icon.default, {
    size: 18
  }), "Clean Small", _react.default.createElement(_icon.default, {
    name: "keyboard_arrow_down",
    size: 18
  })), "\xA0");
});