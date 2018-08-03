"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@dump247/storybook-state");

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

var _mask = require("../../helpers/mask");

var _index = _interopRequireWildcard(require("./index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Form', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Normal', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {}
  }, _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormLabel, null, "Example of label"), _react.default.createElement(_index.FormControl, {
    placeholder: "Form, FormGroup and input"
  }), _react.default.createElement(_index.FormHelpText, null, "text")), _react.default.createElement(_index.FormActions, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar"))), _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {}
  }, _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormControlLabel, {
    label: "Nome",
    placeholder: "Form, FormGroup and input"
  }), _react.default.createElement(_index.FormHelpText, null, "text")), _react.default.createElement(_index.FormActions, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar"))));
});
stories.addWithInfo('Inline', function () {
  return _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {},
    styleType: "inline"
  }, _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormControl, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormControl, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index.FormActions, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar")));
});
stories.addWithInfo('Horizontal', function () {
  return _react.default.createElement(_index.default, {
    onSubmit: function onSubmit() {},
    styleType: "horizontal"
  }, _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormLabel, null, "Example of label"), _react.default.createElement(_index.FormControl, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index.FormGroup, null, _react.default.createElement(_index.FormLabel, null, "Example of label"), _react.default.createElement(_index.FormControl, {
    placeholder: "Form, FormGroup and input"
  })), _react.default.createElement(_index.FormActions, null, _react.default.createElement(_button.default, null, "Cancelar"), _react.default.createElement(_button.default, {
    style: "primary"
  }, "Enviar")));
}); // Form label

stories.addWithInfo('Addon text', function () {
  return _react.default.createElement(_index.FormGroup, null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.FormLabel, {
    addon: 'text'
  }, "Nome:"));
});
stories.addWithInfo('Addon link', function () {
  return _react.default.createElement(_index.FormGroup, null, _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.FormLabel, {
    addon: _react.default.createElement("a", {
      href: "/home"
    }, "Esqueci a minha senha")
  }, "Nome:"));
}); // Form group

stories.addWithInfo('With id', function () {
  return _react.default.createElement(_index.FormGroup, {
    controlId: "test"
  }, _react.default.createElement(_index.FormLabel, null, "Nome:"), _react.default.createElement(_index.FormControl, {
    placeholder: "Form group with input"
  }));
});
stories.addWithInfo('With validation', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormGroup, {
    validationState: "success"
  }, _react.default.createElement(_index.FormLabel, null, "Nome:"), _react.default.createElement(_index.FormControl, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  })), _react.default.createElement(_index.FormGroup, {
    validationState: "warning"
  }, _react.default.createElement(_index.FormLabel, null, "Nome:"), _react.default.createElement(_index.FormControl, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  })), _react.default.createElement(_index.FormGroup, {
    validationState: "error"
  }, _react.default.createElement(_index.FormLabel, null, "Nome:"), _react.default.createElement(_index.FormControl, {
    addonBefore: "@",
    placeholder: "Form group with input",
    feedback: true
  }), _react.default.createElement("span", {
    className: "error"
  }, "testte")));
}); // Form control

stories.addWithInfo('Knobs', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    type: (0, _addonKnobs.text)('Type', 'text'),
    addonBefore: (0, _addonKnobs.text)('Addon Before', '@'),
    addonAfter: (0, _addonKnobs.text)('Addon After', '.00'),
    placeholder: (0, _addonKnobs.text)('Placeholder', 'Digite algo'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false),
    onFocus: (0, _react2.action)('focus'),
    onChange: (0, _react2.action)('change'),
    onBlur: (0, _react2.action)('blur')
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.FormControl, {
    type: "select",
    onFocus: (0, _react2.action)('focus'),
    onChange: (0, _react2.action)('change'),
    onBlur: (0, _react2.action)('blur')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")));
});
stories.addWithInfo('Disabled', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    disabled: true
  }), _react.default.createElement(_index.FormControl, {
    type: "email",
    placeholder: "Digire o seu e-mail",
    disabled: true
  }), _react.default.createElement(_index.FormControl, {
    type: "radio",
    disabled: true
  }), _react.default.createElement(_index.FormControl, {
    type: "checkbox",
    disabled: true
  }), _react.default.createElement(_index.FormControl, {
    type: "select",
    disabled: true
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.FormControl, {
    type: "textarea",
    disabled: true
  }));
});
stories.addWithInfo('Addon before', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    type: "password",
    placeholder: "Digite um nome",
    addonBefore: _react.default.createElement(_index.FormControl, {
      type: "radio"
    })
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.FormControl, {
    type: "password",
    placeholder: "Digite um valor",
    addonBefore: _react.default.createElement(_button.default, {
      style: "transparent",
      size: "none"
    }, _react.default.createElement(_icon.default, {
      className: "search",
      color: "#fff",
      size: 20
    }))
  }));
});
stories.addWithInfo('Addon after', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    type: "password",
    placeholder: "Digite um valor",
    addonAfter: ".00"
  }), _react.default.createElement("br", null), _react.default.createElement("br", null), _react.default.createElement(_index.FormControl, {
    type: "password",
    placeholder: "Digite um valor",
    addonAfter: _react.default.createElement(_button.default, {
      style: "transparent",
      size: "none"
    }, _react.default.createElement(_icon.default, {
      className: "search",
      color: "#fff",
      size: 20
    }))
  }));
});
stories.addWithInfo('Feedback', function () {
  return _react.default.createElement(_index.FormGroup, {
    validationState: "success"
  }, _react.default.createElement(_index.FormControl, {
    type: "password",
    placeholder: "Digite um valor",
    feedback: true
  }));
});
stories.addWithInfo('On focus', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    onFocus: (0, _react2.action)('focus')
  }), _react.default.createElement(_index.FormControl, {
    type: "radio",
    onFocus: (0, _react2.action)('focus')
  }), _react.default.createElement(_index.FormControl, {
    type: "checkbox",
    onFocus: (0, _react2.action)('focus')
  }), _react.default.createElement(_index.FormControl, {
    type: "select",
    onFocus: (0, _react2.action)('focus')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.FormControl, {
    type: "textarea",
    onFocus: (0, _react2.action)('focus')
  }));
});
stories.addWithInfo('On change', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    onChange: (0, _react2.action)('change')
  }), _react.default.createElement(_index.FormControl, {
    type: "radio",
    onChange: (0, _react2.action)('change')
  }), _react.default.createElement(_index.FormControl, {
    type: "checkbox",
    onChange: (0, _react2.action)('change')
  }), _react.default.createElement(_index.FormControl, {
    type: "select",
    onChange: (0, _react2.action)('change')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.FormControl, {
    type: "textarea",
    onChange: (0, _react2.action)('change')
  }));
});
stories.addWithInfo('On blur', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    onBlur: (0, _react2.action)('blur')
  }), _react.default.createElement(_index.FormControl, {
    type: "radio",
    onBlur: (0, _react2.action)('blur')
  }), _react.default.createElement(_index.FormControl, {
    type: "checkbox",
    onBlur: (0, _react2.action)('blur')
  }), _react.default.createElement(_index.FormControl, {
    type: "select",
    onBlur: (0, _react2.action)('blur')
  }, _react.default.createElement("option", {
    value: ""
  }, "Selecione"), _react.default.createElement("option", {
    value: "a"
  }, "a"), _react.default.createElement("option", {
    value: "b"
  }, "b")), _react.default.createElement(_index.FormControl, {
    type: "textarea",
    onBlur: (0, _react2.action)('blur')
  }));
});
stories.addWithInfo('On Mask', function () {
  var handleMask = function handleMask(value) {
    return (0, _mask.fieldsMask)({
      type: 'number'
    }, value);
  };

  return _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    onMask: handleMask
  });
});
stories.addWithInfo('On Validation', (0, _storybookState.withState)({
  status: undefined,
  message: undefined,
  status2: undefined,
  message2: undefined
})(function (_ref) {
  var store = _ref.store;

  var handleValidate = function handleValidate(validation) {
    store.set({
      status: validation.validationState,
      message: validation.errorMessage
    });
  };

  var handleValidateTwo = function handleValidateTwo(validation) {
    store.set({
      status2: validation.validationState,
      message2: validation.errorMessage
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement(_index.FormGroup, {
    validationState: store.state.status
  }, _react.default.createElement(_index.FormControlLabel, {
    label: "Nome",
    placeholder: "Digite um nome",
    onValidate: handleValidate,
    validate: [{
      rule: 'required',
      message: 'Campo obrigatório'
    }, {
      rule: 'letter',
      message: 'Deve ser apenas letras'
    }]
  }), store.state.message && _react.default.createElement(_index.FormHelpText, null, store.state.message)), _react.default.createElement(_index.FormGroup, {
    validationState: store.state.status2
  }, _react.default.createElement(_index.FormLabel, null, "Nome:"), _react.default.createElement(_index.FormControl, {
    placeholder: "Digite um nome",
    onValidate: handleValidateTwo,
    validate: [{
      rule: 'required',
      message: 'Campo obrigatório'
    }, {
      rule: 'letter',
      message: 'Deve ser apenas letras'
    }]
  }), _react.default.createElement(_index.FormHelpText, null, store.state.message2 ? store.state.message2 : 'Seja uma pessoa gentil e escreva aqui')));
}));