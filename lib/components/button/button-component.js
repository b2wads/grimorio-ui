"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles
var styles = {
  "default": "button_default_LxACI",
  "primary": "button_primary_3fZDM",
  "success": "button_success_20SM5",
  "info": "button_info_1T2Ft",
  "warning": "button_warning_2A4ox",
  "danger": "button_danger_3M9Fm",
  "undo": "button_undo_2Qe5s",
  "transparent": "button_transparent_vdrA2",
  "active": "button_active_3PErz",
  "outline": "button_outline_1rjoH",
  "mini": "button_mini_2S-j9",
  "small": "button_small_1V02U",
  "medium": "button_medium_mB3wy",
  "large": "button_large_1x_32",
  "none": "button_none_JTzIM",
  "block": "button_block_2wZhe",
  "rounded": "button_rounded_IBkZ8",
  "circle": "button_circle_2cFKf",
  "loading": "button_loading_3jTlC"
};

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          active = _props.active,
          outline = _props.outline,
          rounded = _props.rounded,
          circle = _props.circle,
          block = _props.block,
          style = _props.style,
          size = _props.size,
          disabled = _props.disabled,
          loading = _props.loading,
          onClick = _props.onClick,
          children = _props.children,
          type = _props.type,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ["active", "outline", "rounded", "circle", "block", "style", "size", "disabled", "loading", "onClick", "children", "type", "className"]);

      var fullClassName = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, "".concat(styles[style]), style), _defineProperty(_classNames, "".concat(styles[size]), size), _defineProperty(_classNames, "".concat(styles.block), block), _defineProperty(_classNames, "".concat(styles.outline), outline), _defineProperty(_classNames, "".concat(styles.rounded), rounded), _defineProperty(_classNames, "".concat(styles.circle), circle), _defineProperty(_classNames, "".concat(styles.active), active), _defineProperty(_classNames, "".concat(styles.loading), loading), _classNames));

      if (!children) {
        return null;
      }

      return _react.default.createElement("button", _extends({}, elementProps, {
        type: type,
        className: fullClassName,
        onClick: onClick,
        disabled: disabled
      }), children);
    }
  }]);

  return Button;
}(_react.PureComponent);

Object.defineProperty(Button, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: false,
    disabled: false,
    block: false,
    outline: false,
    rounded: false,
    circle: false,
    loading: false,
    style: 'default',
    size: 'medium',
    type: 'button',
    children: false,
    className: undefined
  }
});
Object.defineProperty(Button, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: _propTypes.default.bool,
    disabled: _propTypes.default.bool,
    block: _propTypes.default.bool,
    outline: _propTypes.default.bool,
    rounded: _propTypes.default.bool,
    circle: _propTypes.default.bool,
    loading: _propTypes.default.bool,
    type: _propTypes.default.oneOf(['button', 'reset', 'submit']),
    style: _propTypes.default.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'transparent']),
    size: _propTypes.default.oneOf(['mini', 'small', 'medium', 'large', 'none']),
    onClick: _propTypes.default.func,
    children: _propTypes.default.any.isRequired,
    className: _propTypes.default.string
  }
});

var _default = (0, _reactCssModules.default)(Button, styles);

exports.default = _default;