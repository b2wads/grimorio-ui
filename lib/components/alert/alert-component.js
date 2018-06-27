"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// style
var styles = {
  "success": "alert_success_8Yl7R",
  "info": "alert_info_3Y_9k",
  "warning": "alert_warning_3eAmw",
  "danger": "alert_danger_2XLXk",
  "alert--dark": "alert_alert--dark_2ieUN",
  "headline": "alert_headline_9GpE3",
  "body": "alert_body_3fjkv",
  "msgContainer": "alert_msgContainer_2IaRv",
  "alert--icon": "alert_alert--icon_d-QKa",
  "close": "alert_close_hMYKH",
  "icon": "alert_icon_3Y-aN"
};

var Alert =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));
    _this.getIcon = _this.getIcon.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Alert, [{
    key: "getIcon",
    value: function getIcon(type) {
      switch (type) {
        case 'info':
          return 'info-circle';

        case 'success':
          return 'check';

        case 'warning':
          return 'warning';

        case 'danger':
          return 'shield';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          onDismiss = _props.onDismiss,
          children = _props.children,
          type = _props.type,
          headline = _props.headline,
          dismissTitle = _props.dismissTitle,
          showIcon = _props.showIcon,
          dark = _props.dark;
      var fullClassName = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, styles[type], type), _defineProperty(_classNames, styles.dismissable, onDismiss), _defineProperty(_classNames, styles['alert--dark'], dark), _defineProperty(_classNames, styles['alert--icon'], showIcon), _classNames));

      if (!children) {
        return null;
      }

      return _react.default.createElement("div", {
        className: fullClassName
      }, onDismiss && _react.default.createElement(_button.default, {
        style: "transparent",
        size: "none",
        className: styles.close,
        title: dismissTitle,
        onClick: onDismiss
      }, _react.default.createElement(_icon.default, {
        name: "close"
      })), showIcon && _react.default.createElement(_icon.default, {
        className: styles.icon,
        name: this.getIcon(type),
        size: "30px"
      }), _react.default.createElement("div", {
        className: styles.msgContainer
      }, headline ? _react.default.createElement("h4", {
        className: styles.headline
      }, headline) : null, _react.default.createElement("div", {
        className: styles.body
      }, children)));
    }
  }]);

  return Alert;
}(_react.PureComponent);

Object.defineProperty(Alert, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type: 'info',
    onDismiss: undefined,
    dismissTitle: 'Notificação',
    showIcon: false,
    dark: false,
    id: undefined,
    headline: undefined,
    children: undefined
  }
});
Object.defineProperty(Alert, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type: _propTypes.default.oneOf(['info', 'warning', 'success', 'danger']),
    onDismiss: _propTypes.default.func,
    dismissTitle: _propTypes.default.string,
    showIcon: _propTypes.default.bool,
    dark: _propTypes.default.bool,
    id: _propTypes.default.string,
    headline: _propTypes.default.string,
    children: _propTypes.default.any.isRequired
  }
});

var _default = (0, _reactCssModules.default)(Alert, styles);

exports.default = _default;