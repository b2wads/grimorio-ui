"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _formControl = _interopRequireDefault(require("./form-control"));

var _formLabel = _interopRequireDefault(require("./form-label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// styles
var styles = {
  "labelWrapper": "form-control-label_labelWrapper_2JRp8",
  "label": "form-control-label_label_33Bsx",
  "isActive": "form-control-label_isActive_21Dii",
  "formControl": "form-control-label_formControl__4NJj",
  "has-success": "form-control-label_has-success_3Egh5",
  "has-warning": "form-control-label_has-warning_1uRyg",
  "has-error": "form-control-label_has-error_1TTxF"
};

var FormControlLabel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormControlLabel, _PureComponent);

  function FormControlLabel(props, context) {
    var _this;

    _classCallCheck(this, FormControlLabel);

    _this = _possibleConstructorReturn(this, (FormControlLabel.__proto__ || Object.getPrototypeOf(FormControlLabel)).call(this, props, context));
    _this.state = {
      active: false
    };
    _this.handleLabel = _this.handleLabel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FormControlLabel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.value !== undefined && this.props.value !== null && this.props.value !== '') {
        this.setState({
          active: true
        });
      }
    }
  }, {
    key: "handleLabel",
    value: function handleLabel(event) {
      if (event && event.target.value === '') {
        this.setState({
          active: !this.state.active
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          label = _props.label,
          placeholder = _props.placeholder,
          rest = _objectWithoutProperties(_props, ["label", "placeholder"]); // context


      var formGroup = this.context.$formGroup;
      var validationState = formGroup && formGroup.validationState || undefined;
      var labelClasses = (0, _classnames.default)(styles.label, (_classNames = {}, _defineProperty(_classNames, styles.isActive, this.state.active), _defineProperty(_classNames, styles["has-".concat(validationState)], validationState), _classNames));
      var inputClasses = (0, _classnames.default)(styles.formControl, _defineProperty({}, styles["has-".concat(validationState)], validationState));
      return _react.default.createElement("div", {
        className: styles.labelWrapper
      }, _react.default.createElement(_formLabel.default, {
        className: labelClasses,
        onClick: this.handleLabel
      }, label), _react.default.createElement(_formControl.default, _extends({
        placeholder: this.state.active ? placeholder : '',
        inputClassName: inputClasses,
        onBlur: this.handleLabel,
        onFocus: this.handleLabel
      }, rest)));
    }
  }]);

  return FormControlLabel;
}(_react.PureComponent);

Object.defineProperty(FormControlLabel, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    label: _propTypes.default.string,
    placeholder: _propTypes.default.string
  }
});
Object.defineProperty(FormControlLabel, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    $formGroup: _propTypes.default.object
  }
});

var _default = (0, _reactCssModules.default)(FormControlLabel, styles);

exports.default = _default;