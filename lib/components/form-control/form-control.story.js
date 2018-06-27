"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _formGroup = _interopRequireDefault(require("../form-group"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('FormControl', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Knobs', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    type: (0, _addonKnobs.text)('Type', 'text'),
    addonBefore: (0, _addonKnobs.text)('Addon Before', '@'),
    addonAfter: (0, _addonKnobs.text)('Addon After', '.00'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Digite algo'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    onFocus: (0, _addonActions.action)('focus'),
    onChange: (0, _addonActions.action)('change'),
    onBlur: (0, _addonActions.action)('blur')
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    type: "select",
    onFocus: (0, _addonActions.action)('focus'),
    onChange: (0, _addonActions.action)('change'),
    onBlur: (0, _addonActions.action)('blur')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")));
});
stories.addWithInfo('Disabled', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    placeholder: "Digite um nome",
    disabled: true
  }), _react.default.createElement(_index.default, {
    type: "email",
    placeholder: "Digire o seu e-mail",
    disabled: true
  }), _react.default.createElement(_index.default, {
    type: "radio",
    disabled: true
  }), _react.default.createElement(_index.default, {
    type: "checkbox",
    disabled: true
  }), _react.default.createElement(_index.default, {
    type: "select",
    disabled: true
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.default, {
    type: "textarea",
    disabled: true
  }));
});
stories.addWithInfo('Addon before', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Digite um nome",
    addonBefore: _react.default.createElement(_index.default, {
      type: "radio"
    })
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Digite um valor",
    addonBefore: _react.default.createElement(_button.default, {
      style: "transparent",
      size: "none"
    }, _react.default.createElement(_icon.default, {
      className: "search",
      color: "#fff"
    }))
  }));
});
stories.addWithInfo('Addon after', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Digite um valor",
    addonAfter: ".00"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Digite um valor",
    addonAfter: _react.default.createElement(_button.default, {
      style: "transparent",
      size: "none"
    }, _react.default.createElement(_icon.default, {
      className: "search",
      color: "#fff"
    }))
  }));
});
stories.addWithInfo('Feedback', function () {
  return _react.default.createElement(_formGroup.default, {
    validationState: "success"
  }, _react.default.createElement(_index.default, {
    type: "password",
    placeholder: "Digite um valor",
    feedback: true
  }));
});
stories.addWithInfo('On focus', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    placeholder: "Digite um nome",
    onFocus: (0, _addonActions.action)('focus')
  }), _react.default.createElement(_index.default, {
    type: "radio",
    onFocus: (0, _addonActions.action)('focus')
  }), _react.default.createElement(_index.default, {
    type: "checkbox",
    onFocus: (0, _addonActions.action)('focus')
  }), _react.default.createElement(_index.default, {
    type: "select",
    onFocus: (0, _addonActions.action)('focus')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.default, {
    type: "textarea",
    onFocus: (0, _addonActions.action)('focus')
  }));
});
stories.addWithInfo('On change', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    placeholder: "Digite um nome",
    onChange: (0, _addonActions.action)('change')
  }), _react.default.createElement(_index.default, {
    type: "radio",
    onChange: (0, _addonActions.action)('change')
  }), _react.default.createElement(_index.default, {
    type: "checkbox",
    onChange: (0, _addonActions.action)('change')
  }), _react.default.createElement(_index.default, {
    type: "select",
    onChange: (0, _addonActions.action)('change')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.default, {
    type: "textarea",
    onChange: (0, _addonActions.action)('change')
  }));
});
stories.addWithInfo('On blur', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    placeholder: "Digite um nome",
    onBlur: (0, _addonActions.action)('blur')
  }), _react.default.createElement(_index.default, {
    type: "radio",
    onBlur: (0, _addonActions.action)('blur')
  }), _react.default.createElement(_index.default, {
    type: "checkbox",
    onBlur: (0, _addonActions.action)('blur')
  }), _react.default.createElement(_index.default, {
    type: "select",
    onBlur: (0, _addonActions.action)('blur')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.default, {
    type: "textarea",
    onBlur: (0, _addonActions.action)('blur')
  }));
});