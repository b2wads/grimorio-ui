"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _svg = _interopRequireDefault(require("../svg"));

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

var styles = {
  "default": "panel_default_2Dvgk",
  "acom": "panel_acom_3r7OA",
  "suba": "panel_suba_2BzSm",
  "shop": "panel_shop_2-riH",
  "soub": "panel_soub_2tAjK",
  "brandLogo": "panel_brandLogo_1nkH6",
  "isBrand": "panel_isBrand_A6F1-",
  "content": "panel_content_2YsWa",
  "title": "panel_title_14RIX"
};

var Panel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Panel, _PureComponent);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: "renderHeader",
    value: function renderHeader(brand, title) {
      if (brand) {
        return _react.default.createElement("header", {
          className: styles[brand]
        }, _react.default.createElement(_svg.default, {
          className: styles.brandLogo,
          src: "logo/".concat(brand, "-full")
        }));
      } else {
        return _react.default.createElement("header", {
          className: styles.title
        }, title);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          title = _props.title,
          children = _props.children,
          className = _props.className,
          brand = _props.brand,
          elementProps = _objectWithoutProperties(_props, ["title", "children", "className", "brand"]);

      var fullClassName = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, styles.default, true), _defineProperty(_classNames, styles.isBrand, brand), _classNames));
      return _react.default.createElement("article", _extends({}, elementProps, {
        className: fullClassName
      }), (title || brand) && this.renderHeader(brand, title), _react.default.createElement("div", {
        className: (0, _classnames.default)(styles.content, _defineProperty({}, styles.isBrand, brand))
      }, children));
    }
  }]);

  return Panel;
}(_react.PureComponent);

Object.defineProperty(Panel, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    brand: _propTypes.default.oneOf([null, 'acom', 'suba', 'shop', 'soub']),
    title: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),
    children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired
  }
});
Object.defineProperty(Panel, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    brand: null,
    title: false
  }
});

var _default = (0, _reactCssModules.default)(Panel, styles);

exports.default = _default;