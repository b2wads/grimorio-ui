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
  "col": "grid-col_col_3OaVE",
  "reverse": "grid-col_reverse_2_5uy",
  "col-xs": "grid-col_col-xs_2JgFt",
  "col-xs-1": "grid-col_col-xs-1_1vIzX",
  "col-xs-offset-1": "grid-col_col-xs-offset-1_m5pFe",
  "col-xs-2": "grid-col_col-xs-2_3zE8S",
  "col-xs-offset-2": "grid-col_col-xs-offset-2_hfTFV",
  "col-xs-3": "grid-col_col-xs-3_3o6yA",
  "col-xs-offset-3": "grid-col_col-xs-offset-3_Wp_5Q",
  "col-xs-4": "grid-col_col-xs-4_1htpP",
  "col-xs-offset-4": "grid-col_col-xs-offset-4_3gx_Q",
  "col-xs-5": "grid-col_col-xs-5_21nY5",
  "col-xs-offset-5": "grid-col_col-xs-offset-5_37sxF",
  "col-xs-6": "grid-col_col-xs-6_3iGKi",
  "col-xs-offset-6": "grid-col_col-xs-offset-6_1lwiq",
  "col-xs-7": "grid-col_col-xs-7_1gkhx",
  "col-xs-offset-7": "grid-col_col-xs-offset-7_6ZaQE",
  "col-xs-8": "grid-col_col-xs-8_1Vm98",
  "col-xs-offset-8": "grid-col_col-xs-offset-8_2KfHl",
  "col-xs-9": "grid-col_col-xs-9_1x3io",
  "col-xs-offset-9": "grid-col_col-xs-offset-9_qE879",
  "col-xs-10": "grid-col_col-xs-10_3-kVu",
  "col-xs-offset-10": "grid-col_col-xs-offset-10_2NfPd",
  "col-xs-11": "grid-col_col-xs-11_3nwal",
  "col-xs-offset-11": "grid-col_col-xs-offset-11_1DuEz",
  "col-xs-12": "grid-col_col-xs-12_3fmzI",
  "col-xs-offset-12": "grid-col_col-xs-offset-12_Du1my",
  "col-sm": "grid-col_col-sm_1aGcN",
  "col-sm-1": "grid-col_col-sm-1_1RVsb",
  "col-sm-offset-1": "grid-col_col-sm-offset-1_1m183",
  "col-sm-2": "grid-col_col-sm-2_rotPF",
  "col-sm-offset-2": "grid-col_col-sm-offset-2_2n4Yz",
  "col-sm-3": "grid-col_col-sm-3_xWBaI",
  "col-sm-offset-3": "grid-col_col-sm-offset-3_1lvKb",
  "col-sm-4": "grid-col_col-sm-4_1vIB7",
  "col-sm-offset-4": "grid-col_col-sm-offset-4_3wkJu",
  "col-sm-5": "grid-col_col-sm-5_3ql9J",
  "col-sm-offset-5": "grid-col_col-sm-offset-5_2u46f",
  "col-sm-6": "grid-col_col-sm-6_1A8gK",
  "col-sm-offset-6": "grid-col_col-sm-offset-6_x4612",
  "col-sm-7": "grid-col_col-sm-7_1CJFA",
  "col-sm-offset-7": "grid-col_col-sm-offset-7_2pPn4",
  "col-sm-8": "grid-col_col-sm-8_1EQvy",
  "col-sm-offset-8": "grid-col_col-sm-offset-8_2LTQ6",
  "col-sm-9": "grid-col_col-sm-9_1zSLV",
  "col-sm-offset-9": "grid-col_col-sm-offset-9_3V27-",
  "col-sm-10": "grid-col_col-sm-10_198xq",
  "col-sm-offset-10": "grid-col_col-sm-offset-10_1o5GU",
  "col-sm-11": "grid-col_col-sm-11_1C29z",
  "col-sm-offset-11": "grid-col_col-sm-offset-11_IXjvG",
  "col-sm-12": "grid-col_col-sm-12_3qNdb",
  "col-sm-offset-12": "grid-col_col-sm-offset-12_1ZwTQ",
  "col-md": "grid-col_col-md_1FASJ",
  "col-md-1": "grid-col_col-md-1_1XA_f",
  "col-md-offset-1": "grid-col_col-md-offset-1_3FQOF",
  "col-md-2": "grid-col_col-md-2_12cvz",
  "col-md-offset-2": "grid-col_col-md-offset-2_21JqG",
  "col-md-3": "grid-col_col-md-3_ZKFAM",
  "col-md-offset-3": "grid-col_col-md-offset-3_3zI2h",
  "col-md-4": "grid-col_col-md-4_1Ecax",
  "col-md-offset-4": "grid-col_col-md-offset-4_AvYT5",
  "col-md-5": "grid-col_col-md-5_slupI",
  "col-md-offset-5": "grid-col_col-md-offset-5_tIsax",
  "col-md-6": "grid-col_col-md-6_2m2ie",
  "col-md-offset-6": "grid-col_col-md-offset-6_22YuZ",
  "col-md-7": "grid-col_col-md-7_1rT4S",
  "col-md-offset-7": "grid-col_col-md-offset-7_1yIRg",
  "col-md-8": "grid-col_col-md-8_OpAbG",
  "col-md-offset-8": "grid-col_col-md-offset-8_2LpTa",
  "col-md-9": "grid-col_col-md-9_2Q-xN",
  "col-md-offset-9": "grid-col_col-md-offset-9_19oL9",
  "col-md-10": "grid-col_col-md-10_1IoYu",
  "col-md-offset-10": "grid-col_col-md-offset-10_39-9C",
  "col-md-11": "grid-col_col-md-11_2iFNA",
  "col-md-offset-11": "grid-col_col-md-offset-11_1cQ_8",
  "col-md-12": "grid-col_col-md-12_CcXmg",
  "col-md-offset-12": "grid-col_col-md-offset-12_1uvTL",
  "col-lg": "grid-col_col-lg_Mqp1p",
  "col-lg-1": "grid-col_col-lg-1_3JAw0",
  "col-lg-offset-1": "grid-col_col-lg-offset-1_1gjW3",
  "col-lg-2": "grid-col_col-lg-2_2iBOY",
  "col-lg-offset-2": "grid-col_col-lg-offset-2_1HEKD",
  "col-lg-3": "grid-col_col-lg-3_1Hz5f",
  "col-lg-offset-3": "grid-col_col-lg-offset-3_1Kb46",
  "col-lg-4": "grid-col_col-lg-4_Bk7x0",
  "col-lg-offset-4": "grid-col_col-lg-offset-4_1C0Sr",
  "col-lg-5": "grid-col_col-lg-5_2C3k6",
  "col-lg-offset-5": "grid-col_col-lg-offset-5_1NxBM",
  "col-lg-6": "grid-col_col-lg-6_3edOh",
  "col-lg-offset-6": "grid-col_col-lg-offset-6_DKC3p",
  "col-lg-7": "grid-col_col-lg-7_2CBsx",
  "col-lg-offset-7": "grid-col_col-lg-offset-7_1oMDX",
  "col-lg-8": "grid-col_col-lg-8_r_Z7a",
  "col-lg-offset-8": "grid-col_col-lg-offset-8_26iy0",
  "col-lg-9": "grid-col_col-lg-9_2G3gV",
  "col-lg-offset-9": "grid-col_col-lg-offset-9_3boPP",
  "col-lg-10": "grid-col_col-lg-10_1Utfa",
  "col-lg-offset-10": "grid-col_col-lg-offset-10_3_0uK",
  "col-lg-11": "grid-col_col-lg-11_1owVR",
  "col-lg-offset-11": "grid-col_col-lg-offset-11_3ahef",
  "col-lg-12": "grid-col_col-lg-12_1i7df",
  "col-lg-offset-12": "grid-col_col-lg-offset-12_1t-6S"
};

var GridCol =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GridCol, _PureComponent);

  function GridCol() {
    _classCallCheck(this, GridCol);

    return _possibleConstructorReturn(this, (GridCol.__proto__ || Object.getPrototypeOf(GridCol)).apply(this, arguments));
  }

  _createClass(GridCol, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xsOffset = _props.xsOffset,
          smOffset = _props.smOffset,
          mdOffset = _props.mdOffset,
          lgOffset = _props.lgOffset,
          reverse = _props.reverse,
          children = _props.children,
          elementProps = _objectWithoutProperties(_props, ["xs", "sm", "md", "lg", "xsOffset", "smOffset", "mdOffset", "lgOffset", "reverse", "children"]);

      var fullClass = (0, _classnames.default)(styles['col'], (_classNames = {}, _defineProperty(_classNames, styles["col-xs-".concat(xs)], xs), _defineProperty(_classNames, styles["col-sm-".concat(sm)], sm), _defineProperty(_classNames, styles["col-md-".concat(md)], md), _defineProperty(_classNames, styles["col-lg-".concat(lg)], lg), _defineProperty(_classNames, styles["col-xs-offset-".concat(xsOffset)], xsOffset), _defineProperty(_classNames, styles["col-sm-offset-".concat(smOffset)], smOffset), _defineProperty(_classNames, styles["col-md-offset-".concat(mdOffset)], mdOffset), _defineProperty(_classNames, styles["col-lg-offset-".concat(lgOffset)], lgOffset), _defineProperty(_classNames, styles['reverse'], reverse), _classNames));
      return _react.default.createElement("div", _extends({}, elementProps, {
        className: fullClass
      }), children);
    }
  }]);

  return GridCol;
}(_react.PureComponent);

Object.defineProperty(GridCol, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    xs: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
    sm: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
    md: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
    lg: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
    xsOffset: _propTypes.default.number,
    smOffset: _propTypes.default.number,
    mdOffset: _propTypes.default.number,
    lgOffset: _propTypes.default.number,
    reverse: _propTypes.default.bool,
    children: _propTypes.default.node
  }
});

var _default = (0, _reactCssModules.default)(GridCol, styles);

exports.default = _default;