"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _textRow = _interopRequireDefault(require("./text-row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
var widths = [97, 100, 94, 90, 98, 95, 98, 40];

var TextBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TextBlock, _PureComponent);

  function TextBlock(props) {
    var _this;

    _classCallCheck(this, TextBlock);

    _this = _possibleConstructorReturn(this, (TextBlock.__proto__ || Object.getPrototypeOf(TextBlock)).call(this, props));
    _this.getRowStyle = _this.getRowStyle.bind(_assertThisInitialized(_this));
    _this.getRows = _this.getRows.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextBlock, [{
    key: "getRowStyle",
    value: function getRowStyle(i) {
      var rows = this.props.rows;
      return {
        maxHeight: "".concat(100 / (rows * 2 - 1), "%"),
        width: "".concat(widths[(i + widths.length) % widths.length], "%")
      };
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this2 = this;

      var _props = this.props,
          rows = _props.rows,
          lineSpacing = _props.lineSpacing;
      var range = Array.apply(null, {
        length: rows
      }); // eslint-disable-line prefer-spread

      return range.map(function (x, i) {
        return _react.default.createElement(_textRow.default, {
          style: _this2.getRowStyle(i),
          lineSpacing: i !== 0 ? lineSpacing : 0,
          key: x
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className;
      var fullClass = [styles.textBlock, className].filter(function (c) {
        return c;
      }).join(' ');
      return _react.default.createElement("div", {
        className: fullClass,
        style: _objectSpread({}, style)
      }, this.getRows());
    }
  }]);

  return TextBlock;
}(_react.PureComponent);

Object.defineProperty(TextBlock, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    rows: _propTypes.default.number.isRequired,
    lineSpacing: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    style: _propTypes.default.object,
    className: _propTypes.default.string
  }
});

var _default = (0, _reactCssModules.default)(TextBlock, styles);

exports.default = _default;