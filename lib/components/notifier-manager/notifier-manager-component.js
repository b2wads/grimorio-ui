"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));

var _alert = _interopRequireDefault(require("../alert"));

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
  "container": "notifier-manager_container_YKGSS",
  "top-right": "notifier-manager_top-right_1xkix",
  "top-left": "notifier-manager_top-left_2zwZm",
  "bottom-right": "notifier-manager_bottom-right_3j773",
  "bottom-left": "notifier-manager_bottom-left_3vDGf",
  "enter": "notifier-manager_enter_279pG",
  "enterActive": "notifier-manager_enterActive_3Oo7d",
  "leave": "notifier-manager_leave_3u4e6",
  "leaveActive": "notifier-manager_leaveActive_wQx5y"
};

var Notifier =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Notifier, _PureComponent);

  function Notifier(props) {
    var _this;

    _classCallCheck(this, Notifier);

    _this = _possibleConstructorReturn(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).call(this, props));
    _this.dismissAlert = _this.dismissAlert.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Notifier, [{
    key: "dismissAlert",
    value: function dismissAlert(onDismiss) {
      onDismiss();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          position = _props.position,
          alerts = _props.alerts,
          onDismiss = _props.onDismiss,
          timeout = _props.timeout,
          elementProps = _objectWithoutProperties(_props, ["position", "alerts", "onDismiss", "timeout"]);

      var fullClassName = (0, _classnames.default)(styles.container, _defineProperty({}, styles[position], position));
      return _react.default.createElement("div", {
        className: fullClassName
      }, _react.default.createElement(_TransitionGroup.default, {
        transitionName: styles,
        transitionEnterTimeout: 500,
        transitionLeaveTimeout: 300
      }, alerts && alerts.map(function (item) {
        var dismiss = onDismiss ? function () {
          return onDismiss(item);
        } : null;

        var message = item.message,
            alertProps = _objectWithoutProperties(item, ["message"]); // TODO: improvement for the timeout controller


        if (timeout && onDismiss) {
          setTimeout(function () {
            onDismiss(item);
          }, timeout + 500 + 300);
        }

        return _react.default.createElement(_alert.default, _extends({
          key: item.id
        }, elementProps, alertProps, {
          onDismiss: _this2.dismissAlert.bind(_this2, dismiss),
          dark: true,
          showIcon: true
        }), message);
      })));
    }
  }]);

  return Notifier;
}(_react.PureComponent);

Object.defineProperty(Notifier, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    position: 'top-right',
    alerts: []
  }
});
Object.defineProperty(Notifier, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    position: _propTypes.default.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
    alerts: _propTypes.default.arrayOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      id: _propTypes.default.any.isRequired,
      type: _propTypes.default.oneOf(['info', 'success', 'warning', 'danger']),
      headline: _propTypes.default.string,
      message: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node, _propTypes.default.object]).isRequired
    })).isRequired,
    onDismiss: _propTypes.default.func,
    timeout: _propTypes.default.number,
    dismissTitle: _propTypes.default.string,
    showIcon: _propTypes.default.bool
  }
});

var _default = (0, _reactCssModules.default)(Notifier, styles);

exports.default = _default;