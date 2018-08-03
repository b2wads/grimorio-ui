"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _icon = _interopRequireDefault(require("../../icon"));

var _validation = require("../../../helpers/validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// styles
var styles = {
  "form-field": "form-control_form-field_3LCbW",
  "form-field--select": "form-control_form-field--select_25-EX",
  "form-field--textarea": "form-control_form-field--textarea_1nZV_",
  "form-field--radio": "form-control_form-field--radio_1kkE0",
  "form-field--checkbox": "form-control_form-field--checkbox_2EbhG",
  "form-addon-before": "form-control_form-addon-before_35ned",
  "form-addon-after": "form-control_form-addon-after_3lLSL",
  "form-field--horizontal": "form-control_form-field--horizontal_2bS6C",
  "form-addon": "form-control_form-addon_23bH2",
  "form-addon--withItens": "form-control_form-addon--withItens_1-8Rl",
  "form-addon--disabled": "form-control_form-addon--disabled_19sfB",
  "form-addon--horizontal": "form-control_form-addon--horizontal_3E8Gm",
  "form-feedback": "form-control_form-feedback_aD8n0",
  "has-success": "form-control_has-success_3g0G1",
  "form-control": "form-control_form-control_3XBj8",
  "has-warning": "form-control_has-warning_1XzcV",
  "has-error": "form-control_has-error_20KkA"
};

var FormControl =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormControl, _PureComponent);

  function FormControl(props, context) {
    var _this;

    _classCallCheck(this, FormControl);

    _this = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props, context));
    _this.state = {
      value: props.value
    };
    _this.type = _this.props.type;
    _this.hasTypeProperty = _this.type !== 'select' && _this.type !== 'textarea';
    _this.componentRender = _this.componentRender.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormControl, [{
    key: "addonRender",
    value: function addonRender(type, children) {
      if (!type || !children) {
        return null;
      }

      var style = {};

      if (this.props.addonColor) {
        style.backgroundColor = this.props.addonColor;
      }

      return _react.default.createElement("span", {
        onClick: !this.props.disabled ? this.props.onFocus : '',
        className: (0, _classnames.default)(styles["form-addon-".concat(type)], _defineProperty({}, styles['form-addon--disabled'], this.props.disabled)),
        style: style
      }, children);
    }
  }, {
    key: "componentRender",
    value: function componentRender(controlId, type) {
      var _classNames2,
          _this2 = this;

      var Component = this.hasTypeProperty ? 'input' : type;

      var _props = this.props,
          getRef = _props.getRef,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          disabled = _props.disabled,
          children = _props.children,
          name = _props.name,
          onMask = _props.onMask,
          placeholder = _props.placeholder,
          inputClassName = _props.inputClassName,
          validate = _props.validate,
          onValidate = _props.onValidate,
          rest = _objectWithoutProperties(_props, ["getRef", "onChange", "onFocus", "onBlur", "disabled", "children", "name", "onMask", "placeholder", "inputClassName", "validate", "onValidate"]);

      var form = this.context.$form;
      var formStyleType = form && form.styleType || undefined;
      var isClassDefault = ['radio', 'checkbox', 'textarea', 'select'].indexOf(type) < 0;
      var componentClass = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, styles['form-field'], isClassDefault), _defineProperty(_classNames2, styles['form-field--radio'], type === 'radio'), _defineProperty(_classNames2, styles['form-field--checkbox'], type === 'checkbox'), _defineProperty(_classNames2, styles['form-field--textarea'], type === 'textarea'), _defineProperty(_classNames2, styles['form-field--select'], type === 'select'), _defineProperty(_classNames2, styles['form-field--horizontal'], formStyleType === 'horizontal'), _classNames2), inputClassName);
      var tagType; // Has type property

      if (this.hasTypeProperty) {
        tagType = type;
      }

      var handleChange = onChange;

      if (onMask || validate) {
        handleChange = function handleChange(e) {
          _this2.setState({
            value: onMask ? onMask(e.target.value) : e.target.value
          }, function () {
            if (validate && onValidate) {
              onValidate((0, _validation.fieldsValidation)(_this2.state.value, _this2.props.validate));
            }
          });

          if (onChange) {
            onChange(e);
          }
        };
      }

      return _react.default.createElement(Component, _extends({
        type: tagType,
        ref: getRef,
        className: componentClass,
        placeholder: placeholder,
        id: controlId,
        onChange: handleChange,
        onFocus: onFocus,
        onBlur: onBlur,
        disabled: disabled,
        name: name,
        value: this.state.value
      }, rest), children);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames3;

      var _props2 = this.props,
          type = _props2.type,
          addonBefore = _props2.addonBefore,
          addonAfter = _props2.addonAfter,
          feedback = _props2.feedback,
          className = _props2.className; // context

      var form = this.context.$form;
      var formStyleType = form && form.styleType || undefined;
      var formGroup = this.context.$formGroup;
      var controlId = formGroup && formGroup.controlId || undefined;
      var validationState = formGroup && formGroup.validationState; // styles

      var addonClass = (0, _classnames.default)(className, styles['form-addon'], (_classNames3 = {}, _defineProperty(_classNames3, styles['form-addon--withItens'], addonBefore || addonAfter || feedback), _defineProperty(_classNames3, styles['form-addon--horizontal'], formStyleType === 'horizontal'), _defineProperty(_classNames3, styles["has-".concat(validationState)], validationState), _classNames3)); // internal components

      var generateAddonBefore = this.addonRender('before', addonBefore);
      var generateAddonAfter = this.addonRender('after', addonAfter);
      var generateFeedback = FormControl.feedbackRender(validationState, feedback, addonAfter); // component

      var generateComponent = this.componentRender(controlId, type);
      return _react.default.createElement("div", {
        className: addonClass
      }, generateAddonBefore, generateComponent, generateAddonAfter, generateFeedback);
    }
  }], [{
    key: "feedbackRender",
    value: function feedbackRender(validationState, feedback, addonAfter) {
      if (!validationState && !feedback && addonAfter || !feedback || !validationState) {
        return null;
      }

      var iconName;

      switch (validationState) {
        case 'success':
          iconName = 'check';
          break;

        case 'warning':
          iconName = 'warning';
          break;

        case 'error':
          iconName = 'close';
          break;
      }

      return _react.default.createElement("span", {
        className: styles['form-feedback']
      }, _react.default.createElement(_icon.default, {
        name: iconName
      }));
    }
  }]);

  return FormControl;
}(_react.PureComponent);

Object.defineProperty(FormControl, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    disabled: false,
    addonBefore: false,
    addonAfter: false,
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    feedback: false,
    type: 'text'
  }
});
Object.defineProperty(FormControl, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    name: _propTypes.default.string,
    value: _propTypes.default.string,
    onMask: _propTypes.default.func,
    disabled: _propTypes.default.bool,
    getRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
    onChange: _propTypes.default.func,
    onFocus: _propTypes.default.func,
    onBlur: _propTypes.default.func,
    addonAfter: _propTypes.default.node,
    addonBefore: _propTypes.default.node,
    feedback: _propTypes.default.bool,
    type: _propTypes.default.oneOf(['text', 'password', 'select', 'textarea', 'radio', 'checkbox', 'file', 'hidden', 'search', 'email', 'range', 'number', 'month', 'tel', 'time', 'url', 'week', 'date', 'datetime', 'color'])
  }
});
Object.defineProperty(FormControl, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    $form: _propTypes.default.object,
    $formGroup: _propTypes.default.object
  }
});

var _default = (0, _reactCssModules.default)(FormControl, styles);

exports.default = _default;