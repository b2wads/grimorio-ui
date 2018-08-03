"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

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

var styles = {
  "sidebar": "sidebar_sidebar_38FVx",
  "logotype": "sidebar_logotype_18VOe",
  "content": "sidebar_content_2wlxq",
  "toggle": "sidebar_toggle_27c5G",
  "toggleIcon": "sidebar_toggleIcon_3AalQ",
  "closed": "sidebar_closed_1BejM"
};

var Sidebar =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Sidebar, _PureComponent);

  function Sidebar(props) {
    var _this;

    _classCallCheck(this, Sidebar);

    _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
    _this.state = {
      open: true
    };
    _this.handleToggle = _this.handleToggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sidebar, [{
    key: "handleToggle",
    value: function handleToggle(e) {
      var _this2 = this;

      this.setState({
        open: !this.state.open
      }, function () {
        _this2.props.onClick(e, _this2.state.open);
      });
    }
  }, {
    key: "getIconName",
    value: function getIconName() {
      return this.state.open ? 'keyboard_arrow_left' : 'keyboard_arrow_right';
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onClick = _props.onClick;
      var classes = (0, _classnames.default)(styles.sidebar, className, _defineProperty({}, styles.closed, this.state.open === false));
      return _react.default.createElement("div", {
        className: classes
      }, onClick && _react.default.createElement("button", {
        className: styles.toggle,
        type: "button",
        onClick: this.handleToggle
      }, _react.default.createElement(_icon.default, {
        className: styles.toggleIcon,
        name: this.getIconName()
      })), children);
    }
  }]);

  return Sidebar;
}(_react.PureComponent);

Object.defineProperty(Sidebar, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: _propTypes.default.string,
    children: _propTypes.default.element.isRequired
  }
});

var _default = (0, _reactCssModules.default)(Sidebar, styles);

exports.default = _default;