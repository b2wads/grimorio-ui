"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _menuItem = _interopRequireDefault(require("./elements/menu-item"));

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
  "menu": "menu_menu_3P9JH",
  "iconLeft": "menu_iconLeft_30Td4",
  "menuItem": "menu_menuItem_XCNNr",
  "isActive": "menu_isActive_ccx3Z",
  "accordionMenu": "menu_accordionMenu_2-USU",
  "closed": "menu_closed_3Ckm1"
};

var Menu =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Menu, _PureComponent);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          items = _props.items,
          children = _props.children,
          type = _props.type,
          theme = _props.theme,
          open = _props.open,
          rest = _objectWithoutProperties(_props, ["className", "items", "children", "type", "theme", "open"]);

      var classes = (0, _classnames.default)(styles.menu, className, (_classNames = {}, _defineProperty(_classNames, styles[type], type), _defineProperty(_classNames, styles[theme], theme), _defineProperty(_classNames, styles.closed, open === false), _classNames));
      return _react.default.createElement("ul", _extends({
        className: classes
      }, rest), children ? children : items.map(function (item) {
        return _react.default.createElement(_menuItem.default, {
          icon: item.icon,
          content: item.name,
          link: item.link,
          items: item.items,
          active: item.active
        });
      }));
    }
  }]);

  return Menu;
}(_react.PureComponent);

Object.defineProperty(Menu, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    theme: 'default',
    items: []
  }
});
Object.defineProperty(Menu, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes.default.node,
    className: _propTypes.default.string,
    items: _propTypes.default.array,
    type: _propTypes.default.oneOf(['accordionMenu']),
    theme: _propTypes.default.oneOf(['default', 'dark'])
  }
});

var _default = (0, _reactCssModules.default)(Menu, styles);

exports.default = _default;