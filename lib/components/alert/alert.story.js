"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Alert', module);
stories.addDecorator(_addonKnobs.withKnobs);
var firstArgAction = (0, _addonActions.decorateAction)([function (args) {
  return args.slice(0, 1);
}]);
var options = {
  info: 'Info',
  warning: 'Warning',
  success: 'Success',
  danger: 'Danger'
};
stories.addWithInfo('Without dismiss', "\n  This is the basic usage.\n  ", function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    type: (0, _addonKnobs.select)('Type', options, 'info'),
    showIcon: (0, _addonKnobs.boolean)('showIcon', false),
    dark: (0, _addonKnobs.boolean)('Dark color', false),
    headline: (0, _addonKnobs.text)('Headline', '')
  }, _react.default.createElement("p", null, (0, _addonKnobs.text)('Text', 'Maecenas ipsum velit, consectetuer eu.'))));
});
stories.addWithInfo('With dismiss', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    type: (0, _addonKnobs.select)('Type', options, 'info'),
    showIcon: (0, _addonKnobs.boolean)('showIcon', false),
    dark: (0, _addonKnobs.boolean)('Dark color', false),
    headline: (0, _addonKnobs.text)('Headline', ''),
    onDismiss: firstArgAction('removed')
  }, _react.default.createElement("p", null, (0, _addonKnobs.text)('Text', 'Maecenas ipsum velit, consectetuer eu.'))));
});