"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var placeholders = _interopRequireWildcard(require("./placeholders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// styles
var styles = {
  "text": "placeholder_text_2TcYM",
  "rect": "placeholder_rect_2vs00",
  "round": "placeholder_round_1ApKp",
  "placeHolderShimmer": "placeholder_placeHolderShimmer_2BTBt",
  "media": "placeholder_media_w3xN7",
  "media-round": "placeholder_media-round_2I7vn",
  "textBlock": "placeholder_textBlock_2pUq2"
};

var Placeholder =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Placeholder, _PureComponent);

  function Placeholder(props) {
    var _this;

    _classCallCheck(this, Placeholder);

    _this = _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).call(this, props));
    _this.state = {
      ready: _this.props.ready
    };
    _this.isReady = _this.isReady.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Placeholder, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.state.ready) {
        this.setState({
          ready: nextProps.ready
        });
      }
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.props.firstLaunchOnly ? this.state.ready : this.props.ready;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.isReady()) {
        return this.props.children;
      }

      var _props = this.props,
          type = _props.type,
          customPlaceholder = _props.customPlaceholder,
          rest = _objectWithoutProperties(_props, ["type", "customPlaceholder"]);

      if (customPlaceholder) {
        return customPlaceholder;
      }

      var Component = placeholders[type];
      return _react.default.createElement(Component, rest);
    }
  }]);

  return Placeholder;
}(_react.PureComponent);

Object.defineProperty(Placeholder, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reducerName: _propTypes.default.string,
    children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element]).isRequired,
    ready: _propTypes.default.bool.isRequired,
    firstLaunchOnly: _propTypes.default.bool,
    type: _propTypes.default.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
    rows: _propTypes.default.number,
    color: _propTypes.default.string,
    customPlaceholder: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.element])
  }
});
Object.defineProperty(Placeholder, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reducerName: 'list',
    type: 'text',
    color: '#cdcdcd'
  }
});

var _default = (0, _reactCssModules.default)(Placeholder, styles);

exports.default = _default;