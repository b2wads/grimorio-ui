"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../index"));

var _icon = _interopRequireDefault(require("../../icon"));

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

// styles
var styles = {
  "menu": "menu_menu_3P9JH",
  "iconLeft": "menu_iconLeft_30Td4",
  "menuItem": "menu_menuItem_XCNNr",
  "isActive": "menu_isActive_ccx3Z",
  "accordionMenu": "menu_accordionMenu_2-USU",
  "closed": "menu_closed_3Ckm1"
};

var MenuItem =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MenuItem, _PureComponent);

  function MenuItem(props) {
    var _this;

    _classCallCheck(this, MenuItem);

    _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuItem, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _props = this.props,
          handleClick = _props.handleClick,
          link = _props.link;

      if (handleClick) {
        handleClick(e, link);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          active = _props2.active,
          className = _props2.className,
          content = _props2.content,
          icon = _props2.icon,
          items = _props2.items,
          children = _props2.children;
      var classes = (0, _classnames.default)(styles.menuItem, className, _defineProperty({}, "".concat(styles.isActive), active));
      return _react.default.createElement("li", {
        className: classes,
        onClick: this.handleClick
      }, icon && _react.default.createElement(_icon.default, {
        size: 16,
        name: icon,
        className: styles.iconLeft
      }), children ? children : content, items && _react.default.createElement(_index.default, {
        items: items
      }));
    }
  }]);

  return MenuItem;
}(_react.PureComponent);

Object.defineProperty(MenuItem, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    icon: _propTypes.default.string,
    key: _propTypes.default.string,
    name: _propTypes.default.string,
    link: _propTypes.default.string,
    onClick: _propTypes.default.func
  }
});

var _default = (0, _reactCssModules.default)(MenuItem, styles);

exports.default = _default;