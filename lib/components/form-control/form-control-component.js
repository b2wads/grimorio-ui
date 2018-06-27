"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _icon = _interopRequireDefault(require("../icon"));

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
  "form-field": "form-control_form-field_3H-CU",
  "form-field--select": "form-control_form-field--select_2ylUj",
  "form-field--textarea": "form-control_form-field--textarea_2Gae7",
  "form-field--radio": "form-control_form-field--radio_PmGF0",
  "form-field--checkbox": "form-control_form-field--checkbox_HpvMl",
  "form-addon-before": "form-control_form-addon-before_ull0i",
  "form-addon-after": "form-control_form-addon-after_2uY_8",
  "form-addon": "form-control_form-addon_1Za5U",
  "form-addon--withItens": "form-control_form-addon--withItens_2lSDa",
  "form-addon--disabled": "form-control_form-addon--disabled_1i1YV",
  "form-feedback": "form-control_form-feedback_1vbcy"
};

var FormControl =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormControl, _PureComponent);

  function FormControl(props, context) {
    var _this;

    _classCallCheck(this, FormControl);

    _this = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props, context));
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
      var _classNames2;

      var Component = this.hasTypeProperty ? 'input' : type;

      var _props = this.props,
          getRef = _props.getRef,
          onChange = _props.onChange,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          disabled = _props.disabled,
          children = _props.children,
          name = _props.name,
          value = _props.value,
          onMask = _props.onMask,
          placeholder = _props.placeholder,
          rest = _objectWithoutProperties(_props, ["getRef", "onChange", "onFocus", "onBlur", "disabled", "children", "name", "value", "onMask", "placeholder"]);

      var isClassDefault = ['radio', 'checkbox', 'textarea', 'select'].indexOf(type) < 0;
      var componentClass = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, styles['form-field'], isClassDefault), _defineProperty(_classNames2, styles['form-field--radio'], type === 'radio'), _defineProperty(_classNames2, styles['form-field--checkbox'], type === 'checkbox'), _defineProperty(_classNames2, styles['form-field--textarea'], type === 'textarea'), _defineProperty(_classNames2, styles['form-field--select'], type === 'select'), _classNames2));
      var tagType; // Has type property

      if (this.hasTypeProperty) {
        tagType = type;
      }

      var newValue;

      if (onMask) {
        newValue = onMask(value);
      } else {
        newValue = value;
      }

      return _react.default.createElement(Component, _extends({
        type: tagType,
        ref: getRef,
        className: componentClass,
        placeholder: placeholder,
        id: controlId,
        onChange: onChange,
        onFocus: onFocus,
        onBlur: onBlur,
        disabled: disabled,
        name: name,
        value: newValue
      }, rest), children);
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          type = _props2.type,
          addonBefore = _props2.addonBefore,
          addonAfter = _props2.addonAfter,
          feedback = _props2.feedback,
          className = _props2.className; // context

      var formGroup = this.context.$formGroup;
      var controlId = formGroup && formGroup.controlId || undefined;
      var validationState = formGroup && formGroup.validationState; // styles

      var addonClass = (0, _classnames.default)(className, styles['form-addon'], _defineProperty({}, styles['form-addon--withItens'], addonBefore || addonAfter || feedback)); // internal components

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
    $formGroup: _propTypes.default.object
  }
});

var _default = (0, _reactCssModules.default)(FormControl, styles);

exports.default = _default;