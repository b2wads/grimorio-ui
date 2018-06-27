"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Placeholder', module);
stories.addDecorator(_addonKnobs.withKnobs);
var options = {
  text: 'Text',
  media: 'Media',
  textRow: 'TextRow',
  rect: 'Rect',
  round: 'Round'
};
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    reducerName: 'xpto',
    ready: (0, _addonKnobs.boolean)('Ready', false),
    rows: (0, _addonKnobs.number)('Linhas', 5),
    type: (0, _addonKnobs.select)('Type', options, 'text'),
    firstLaunchOnly: (0, _addonKnobs.boolean)('first launch only', false),
    color: "#f0f0f0",
    style: {
      minWidth: 50,
      minHeight: 50
    }
  }, _react.default.createElement("div", null, "Esse \xE9 o conte\xFAdo")));
});