"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Button', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Style', "\n    This is the basic usage with the button.\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    onClick: (0, _addonActions.action)('clicked')
  }, "Default"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary"
  }, "Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "success"
  }, "Success"), "\xA0", _react.default.createElement(_index.default, {
    style: "info"
  }, "Info"), "\xA0", _react.default.createElement(_index.default, {
    style: "warning"
  }, "Warning"), "\xA0", _react.default.createElement(_index.default, {
    style: "danger"
  }, "Danger"), "\xA0", _react.default.createElement(_index.default, {
    style: "undo"
  }, "Undo"), "\xA0", _react.default.createElement(_index.default, {
    style: "transparent",
    size: "none"
  }, _react.default.createElement(_icon.default, null)), "\xA0");
});
stories.addWithInfo('Size', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    size: "mini"
  }, "Mini"), "\xA0", _react.default.createElement(_index.default, {
    size: "small"
  }, "Small"), "\xA0", _react.default.createElement(_index.default, null, "Medium"), "\xA0", _react.default.createElement(_index.default, {
    size: "large"
  }, "Large"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "large"
  }, "Large"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary"
  }, "Medium"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "small"
  }, "Small"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "mini"
  }, "Mini"), "\xA0");
});
stories.addWithInfo('Outline', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    outline: true
  }, "Default"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    outline: true
  }, "Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    outline: true
  }, "Success"), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    outline: true
  }, "Info"), "\xA0", _react.default.createElement(_index.default, {
    style: "warning",
    outline: true
  }, "Warning"), "\xA0", _react.default.createElement(_index.default, {
    style: "danger",
    outline: true
  }, "Danger"), "\xA0", _react.default.createElement(_index.default, {
    style: "undo",
    outline: true
  }, "Undo"), "\xA0");
});
stories.addWithInfo('Active', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    active: true
  }, "Default"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    active: true
  }, "Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    active: true
  }, "Success"), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    active: true
  }, "Info"), "\xA0", _react.default.createElement(_index.default, {
    style: "warning",
    active: true
  }, "Warning"), "\xA0", _react.default.createElement(_index.default, {
    style: "danger",
    active: true
  }, "Danger"), "\xA0", _react.default.createElement(_index.default, {
    style: "undo",
    active: true
  }, "Undo"), "\xA0");
});
stories.addWithInfo('Block', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    block: true
  }, "Default"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    block: true
  }, "Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    block: true
  }, "Success"), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    block: true
  }, "Info"), "\xA0", _react.default.createElement(_index.default, {
    style: "warning",
    block: true
  }, "Warning"), "\xA0", _react.default.createElement(_index.default, {
    style: "danger",
    block: true
  }, "Danger"), "\xA0", _react.default.createElement(_index.default, {
    style: "undo",
    block: true
  }, "Undo"), "\xA0");
});
stories.addWithInfo('With icon', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, null, _react.default.createElement(_icon.default, null), " Default"), "\xA0", _react.default.createElement(_index.default, {
    style: "primary"
  }, _react.default.createElement(_icon.default, null), " Primary"), "\xA0", _react.default.createElement(_index.default, {
    style: "success"
  }, "Success ", _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "info"
  }, _react.default.createElement(_icon.default, null), " Info ", _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "warning",
    outline: true
  }, _react.default.createElement(_icon.default, null), " Warning"), "\xA0", _react.default.createElement(_index.default, {
    style: "undo"
  }, _react.default.createElement(_icon.default, null), " Undo"), _react.default.createElement("br", null), _react.default.createElement("br", null), "\xA0\xA0\xA0", _react.default.createElement(_index.default, {
    style: "danger",
    block: true
  }, _react.default.createElement(_icon.default, null), " Danger"), "\xA0");
});
stories.addWithInfo('Icon with circle style', function () {
  return _react.default.createElement("div", null, "block", _react.default.createElement(_index.default, {
    size: "mini",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "14px"
  })), "\xA0", _react.default.createElement(_index.default, {
    size: "mini",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    size: "mini",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "36px"
  })), "\xA0", _react.default.createElement(_index.default, {
    size: "mini",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "50px"
  })), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "primary",
    size: "small",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "14px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "small",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "small",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "36px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    size: "small",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "50px"
  })), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "success",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "14px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "36px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "success",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "50px"
  })), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "info",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "14px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "36px"
  })), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, {
    size: "50px"
  })), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "warning",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "danger",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0", _react.default.createElement(_index.default, {
    style: "undo",
    size: "large",
    circle: true
  }, _react.default.createElement(_icon.default, null)), "\xA0");
});
stories.addWithInfo('Rounded', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    rounded: true
  }, "Default"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "primary",
    rounded: true
  }, _react.default.createElement(_icon.default, null)), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "success",
    rounded: true
  }, _react.default.createElement(_icon.default, null), " Success"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "info",
    disabled: true,
    rounded: true
  }, "Info"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "warning",
    outline: true,
    rounded: true
  }, "Warning"), _react.default.createElement("br", null), _react.default.createElement("br", null), "danger", _react.default.createElement(_index.default, {
    style: "danger",
    block: true,
    rounded: true
  }, "Danger"), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "undo",
    block: true,
    rounded: true
  }, "Undo"));
});
stories.addWithInfo('Disabled', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  }, (0, _addonKnobs.text)('Text (default)', 'Default')), "\xA0", _react.default.createElement(_index.default, {
    style: "primary",
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  }, (0, _addonKnobs.text)('Text (primary)', 'Primary')), "\xA0", _react.default.createElement(_index.default, {
    style: "info",
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    rounded: true
  }, (0, _addonKnobs.text)('Text (rounded)', 'Rounded')), "\xA0", _react.default.createElement(_index.default, {
    style: "warning",
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    outline: true
  }, (0, _addonKnobs.text)('Text (outline)', 'Outline')), "\xA0", _react.default.createElement(_index.default, {
    style: "undo",
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  }, (0, _addonKnobs.text)('Text (undo)', 'Undo')), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    style: "danger",
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    block: true
  }, (0, _addonKnobs.text)('Text (block)', 'Outline')));
});
stories.addWithInfo('Loading', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    loading: (0, _addonKnobs.boolean)('Loading', false)
  }, (0, _addonKnobs.text)('Text (default)', 'Default')), "\xA0");
});