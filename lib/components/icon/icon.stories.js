"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _iconComponent = _interopRequireDefault(require("./icon-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Icon', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_iconComponent.default, null), _react.default.createElement(_iconComponent.default, {
    name: "pets"
  }), _react.default.createElement(_iconComponent.default, {
    name: "link",
    size: 48
  }));
});