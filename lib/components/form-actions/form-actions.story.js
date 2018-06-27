"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('FormActions', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement(_index.default, null, _react.default.createElement(_button.default, {
    style: "undo",
    type: "submit"
  }, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary",
    type: "submit"
  }, "Criar"));
});