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
  "row": "grid-row_row_1tHcr",
  "reverse": "grid-row_reverse_IsQfh",
  "start-xs": "grid-row_start-xs_1lCKO",
  "center-xs": "grid-row_center-xs_2WLEO",
  "end-xs": "grid-row_end-xs_Yeift",
  "top-xs": "grid-row_top-xs_1V7kQ",
  "middle-xs": "grid-row_middle-xs_xQrJk",
  "bottom-xs": "grid-row_bottom-xs_3c1au",
  "around-xs": "grid-row_around-xs_6GR4n",
  "between-xs": "grid-row_between-xs_2jPAk",
  "first-xs": "grid-row_first-xs_BMC3R",
  "last-xs": "grid-row_last-xs_1l7LG",
  "start-sm": "grid-row_start-sm_3IuRb",
  "center-sm": "grid-row_center-sm_KYLkX",
  "end-sm": "grid-row_end-sm_1-ov7",
  "top-sm": "grid-row_top-sm_VDoyL",
  "middle-sm": "grid-row_middle-sm_16GX_",
  "bottom-sm": "grid-row_bottom-sm_2N9rM",
  "around-sm": "grid-row_around-sm_1U4x6",
  "between-sm": "grid-row_between-sm_1dp3P",
  "first-sm": "grid-row_first-sm_24q-a",
  "last-sm": "grid-row_last-sm_3bHxd",
  "start-md": "grid-row_start-md_31-ZN",
  "center-md": "grid-row_center-md_3swsz",
  "end-md": "grid-row_end-md_1FXOb",
  "top-md": "grid-row_top-md_vle7-",
  "middle-md": "grid-row_middle-md_XWYrw",
  "bottom-md": "grid-row_bottom-md_3HHl8",
  "around-md": "grid-row_around-md_3epkO",
  "between-md": "grid-row_between-md_1wHYy",
  "first-md": "grid-row_first-md_1YnJX",
  "last-md": "grid-row_last-md_2f2mk",
  "start-lg": "grid-row_start-lg_3NLkc",
  "center-lg": "grid-row_center-lg_Bc51d",
  "end-lg": "grid-row_end-lg_iWjTY",
  "top-lg": "grid-row_top-lg_1nrAZ",
  "middle-lg": "grid-row_middle-lg_HViiq",
  "bottom-lg": "grid-row_bottom-lg_3_mI_",
  "around-lg": "grid-row_around-lg_2pvjc",
  "between-lg": "grid-row_between-lg_16nNx",
  "first-lg": "grid-row_first-lg_2ILuT",
  "last-lg": "grid-row_last-lg_3lPZI"
};

var GridRow =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GridRow, _PureComponent);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          reverse = _props.reverse,
          start = _props.start,
          center = _props.center,
          end = _props.end,
          top = _props.top,
          middle = _props.middle,
          bottom = _props.bottom,
          around = _props.around,
          between = _props.between,
          first = _props.first,
          last = _props.last,
          elementProps = _objectWithoutProperties(_props, ["reverse", "start", "center", "end", "top", "middle", "bottom", "around", "between", "first", "last"]);

      var fullClass = (0, _classnames.default)(styles['row'], (_classNames = {}, _defineProperty(_classNames, styles['reverse'], reverse), _defineProperty(_classNames, styles["start-".concat(start)], start), _defineProperty(_classNames, styles["center-".concat(center)], center), _defineProperty(_classNames, styles["end-".concat(end)], end), _defineProperty(_classNames, styles["top-".concat(top)], top), _defineProperty(_classNames, styles["middle-".concat(middle)], middle), _defineProperty(_classNames, styles["bottom-".concat(bottom)], bottom), _defineProperty(_classNames, styles["around-".concat(around)], around), _defineProperty(_classNames, styles["between-".concat(between)], between), _defineProperty(_classNames, styles["first-".concat(first)], first), _defineProperty(_classNames, styles["last-".concat(last)], last), _classNames));
      return _react.default.createElement("div", _extends({}, elementProps, {
        className: fullClass
      }), this.props.children);
    }
  }]);

  return GridRow;
}(_react.PureComponent);

Object.defineProperty(GridRow, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    reverse: _propTypes.default.bool,
    start: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    center: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    end: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    top: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    middle: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    bottom: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    around: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    between: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    first: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    last: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg']),
    children: _propTypes.default.node
  }
});

var _default = (0, _reactCssModules.default)(GridRow, styles);

exports.default = _default;