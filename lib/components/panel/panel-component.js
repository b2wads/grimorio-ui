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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  "default": "panel_default_2Dvgk",
  "brand": "panel_brand_1Ctq8",
  "default__header": "panel_default__header_1BTqW",
  "brand__header": "panel_brand__header_3xuVL",
  "brand__content": "panel_brand__content_hnll-"
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
    key: "render",
    value: function render() {
      var _props = this.props,
          header = _props.header,
          children = _props.children,
          className = _props.className,
          type = _props.type;
      var fullClassName = (0, _classnames.default)(className, styles[type]);
      return _react.default.createElement("article", {
        className: fullClassName
      }, _react.default.createElement("header", null, _react.default.createElement("h1", {
        className: styles["".concat(type, "__header")]
      }, header)), _react.default.createElement("div", {
        className: styles["".concat(type, "__content")]
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
    type: _propTypes.default.oneOf(['default', 'brand']),
    header: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
    children: _propTypes.default.element.isRequired
  }
});
Object.defineProperty(Panel, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type: 'default'
  }
});

var _default = (0, _reactCssModules.default)(Panel, styles);

exports.default = _default;