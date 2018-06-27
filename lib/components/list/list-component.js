"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

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
  "decimal": "list_decimal_Djoyf",
  "circle": "list_circle_12faP",
  "disc": "list_disc_O0tNb",
  "unstyled": "list_unstyled_1bHNY",
  "list": "list_list_32t-L",
  "list-item": "list_list-item_3xPra",
  "bordered": "list_bordered_1Ay6C",
  "zebra": "list_zebra_UR4zo"
};

var List =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          bordered = _props.bordered,
          zebra = _props.zebra,
          style = _props.style,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ["children", "bordered", "zebra", "style", "className"]);

      var fullClassName = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, styles[style], style), _defineProperty(_classNames, styles[bordered], bordered), _defineProperty(_classNames, styles[zebra], zebra), _classNames));
      return _react.default.createElement("ul", _extends({}, elementProps, {
        className: fullClassName
      }), children);
    }
  }]);

  return List;
}(_react.PureComponent);

Object.defineProperty(List, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: undefined,
    bordered: false,
    zebra: false,
    style: 'bordered',
    className: undefined
  }
});
Object.defineProperty(List, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes.default.node,
    bordered: _propTypes.default.bool,
    zebra: _propTypes.default.bool,
    style: _propTypes.default.oneOf(['unstyled', 'decimal', 'disc', 'circle', 'zebra', 'bordered']),
    className: _propTypes.default.string
  }
});

var ListItem =
/*#__PURE__*/
function (_PureComponent2) {
  _inherits(ListItem, _PureComponent2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          elementProps = _objectWithoutProperties(_props2, ["children", "className"]);

      return _react.default.createElement("li", _extends({}, elementProps, {
        className: (0, _classnames.default)(styles['list-item'], className)
      }), children);
    }
  }]);

  return ListItem;
}(_react.PureComponent);

Object.defineProperty(ListItem, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: undefined,
    className: undefined
  }
});
Object.defineProperty(ListItem, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes.default.node,
    className: _propTypes.default.string
  }
});
List.Item = ListItem;

var _default = (0, _reactCssModules.default)(List, styles);

exports.default = _default;