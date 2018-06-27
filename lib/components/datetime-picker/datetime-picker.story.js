"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _datetimePickerComponent = _interopRequireDefault(require("./datetime-picker-component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('DatetimePicker', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_datetimePickerComponent.default, {
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'H:mm',
    locale: "pt-br",
    placeholder: "Completo",
    closeOnSelect: true,
    name: "startDate",
    defaultValue: "12/12/2010",
    onChange: function onChange(name, value) {
      return console.log(name, value);
    }
  }), _react.default.createElement("br", null), _react.default.createElement(_datetimePickerComponent.default, {
    dateFormat: 'DD/MM/YYYY',
    timeFormat: false,
    locale: "pt-br",
    placeholder: "Apenas Data",
    closeOnSelect: true,
    name: "endDate",
    defaultValue: "12/12/2010",
    onChange: function onChange(name, value) {
      return console.log(name, value);
    }
  }), _react.default.createElement("br", null), _react.default.createElement(_datetimePickerComponent.default, {
    dateFormat: 'MM/YYYY',
    timeFormat: false,
    locale: "pt-br",
    placeholder: "Apenas m\xEAs e ano",
    viewMode: "months",
    closeOnSelect: true
  }), _react.default.createElement("br", null), _react.default.createElement(_datetimePickerComponent.default, {
    dateFormat: 'YYYY',
    timeFormat: false,
    locale: "pt-br",
    placeholder: "Apenas ano",
    viewMode: "years",
    closeOnSelect: true
  }), _react.default.createElement("br", null), _react.default.createElement(_datetimePickerComponent.default, {
    dateFormat: false,
    timeFormat: 'H:mm',
    locale: "pt-br",
    placeholder: "Apenas hora e minuto",
    viewMode: "time",
    closeOnSelect: true,
    name: "startHour",
    defaultValue: "06:00",
    onChange: function onChange(name, value) {
      return console.log(name, value);
    }
  }));
});