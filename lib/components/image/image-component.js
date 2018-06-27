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
  "center": "image_center_3-jW5",
  "right": "image_right_2r8pX",
  "small": "image_small_3FbHv",
  "medium": "image_medium_1PCrJ",
  "large": "image_large_3nUFy",
  "circle": "image_circle_3Zqib",
  "rounded": "image_rounded_25pM_",
  "thumbnail": "image_thumbnail_2O6h2"
};

var Image =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Image, _PureComponent);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          rounded = _props.rounded,
          circle = _props.circle,
          thumbnail = _props.thumbnail,
          size = _props.size,
          path = _props.path,
          align = _props.align,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ["rounded", "circle", "thumbnail", "size", "path", "align", "className"]);

      var fullClassName = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, styles[size], size), _defineProperty(_classNames, styles.rounded, rounded), _defineProperty(_classNames, styles.circle, circle), _defineProperty(_classNames, styles.thumbnail, thumbnail), _classNames));

      if (!path || path === '') {
        return null;
      }

      return _react.default.createElement("figure", {
        className: styles[align]
      }, _react.default.createElement("img", _extends({}, elementProps, {
        src: path,
        className: fullClassName
      })));
    }
  }]);

  return Image;
}(_react.PureComponent);

Object.defineProperty(Image, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rounded: false,
    circle: false,
    thumbnail: false,
    size: 'medium',
    align: 'left',
    path: false,
    className: undefined
  }
});
Object.defineProperty(Image, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rounded: _propTypes.default.bool,
    circle: _propTypes.default.bool,
    thumbnail: _propTypes.default.bool,
    size: _propTypes.default.oneOf(['small', 'medium', 'large']),
    align: _propTypes.default.oneOf(['left', 'center', 'right']),
    path: _propTypes.default.string.isRequired,
    className: _propTypes.default.string
  }
});

var _default = (0, _reactCssModules.default)(Image, styles);

exports.default = _default;