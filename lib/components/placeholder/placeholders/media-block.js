"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _textBlock = _interopRequireDefault(require("./text-block"));

var _roundShape = _interopRequireDefault(require("./round-shape"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// style
var styles = {
  "text": "placeholder_text_2TcYM",
  "rect": "placeholder_rect_2vs00",
  "round": "placeholder_round_1ApKp",
  "placeHolderShimmer": "placeholder_placeHolderShimmer_2BTBt",
  "media": "placeholder_media_w3xN7",
  "media-round": "placeholder_media-round_2I7vn",
  "textBlock": "placeholder_textBlock_2pUq2"
};

var MediaBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MediaBlock, _PureComponent);

  function MediaBlock() {
    _classCallCheck(this, MediaBlock);

    return _possibleConstructorReturn(this, (MediaBlock.__proto__ || Object.getPrototypeOf(MediaBlock)).apply(this, arguments));
  }

  _createClass(MediaBlock, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          rows = _props.rows;
      var fullClass = [styles.media, className].filter(function (c) {
        return c;
      }).join(' ');
      return _react.default.createElement("div", {
        className: fullClass,
        style: _objectSpread({}, style)
      }, _react.default.createElement(_roundShape.default, {
        className: styles['media-round']
      }), _react.default.createElement(_textBlock.default, {
        rows: rows
      }));
    }
  }]);

  return MediaBlock;
}(_react.PureComponent);

Object.defineProperty(MediaBlock, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rows: _propTypes.default.number.isRequired,
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }
});

var _default = (0, _reactCssModules.default)(MediaBlock, styles);

exports.default = _default;