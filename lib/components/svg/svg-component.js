"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Svg =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Svg, _PureComponent);

  function Svg(props) {
    var _this;

    _classCallCheck(this, Svg);

    _this = _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).call(this, props));
    _this.pathLoader = _this.pathLoader.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Svg, [{
    key: "pathLoader",
    value: function pathLoader(src) {
      try {
        /* eslint-disable */
        return require('!!babel-loader!svg-react-loader!../../images/svg/' + src + '.svg');
        /* eslint-disable */
      } catch (error) {
        return false;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
        verticalAlign: 'middle'
      };

      if (this.props.width) {
        // CSS instead of the width attr to support non-pixel units
        styles.width = this.props.width;
      }

      if (this.props.height) {
        // Prevents scaling issue in IE
        styles.height = this.props.height;
      }

      var _props = this.props,
          src = _props.src,
          elementProps = _objectWithoutProperties(_props, ["src"]);

      var Component = this.pathLoader(src);

      if (!Component) {
        return null;
      }

      return _react.default.createElement(Component, _extends({
        style: styles
      }, elementProps));
    }
  }]);

  return Svg;
}(_react.PureComponent);

Object.defineProperty(Svg, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    src: 'logo/acom'
  }
});
Object.defineProperty(Svg, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    src: _propTypes.default.string,
    width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    style: _propTypes.default.object
  }
});
var _default = Svg;
exports.default = _default;