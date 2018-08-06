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
  "label": "form-label_label_1mM7f",
  "label-addon": "form-label_label-addon_1Vy2J",
  "isHorizontal": "form-label_isHorizontal_vH-w2",
  "isCheckboxOrRadio": "form-label_isCheckboxOrRadio_w0P7_",
  "has-success": "form-label_has-success_32_-t",
  "has-warning": "form-label_has-warning_3O3WX",
  "has-error": "form-label_has-error_1Ez19"
};

var FormLabel =
/*#__PURE__*/
function (_Component) {
  _inherits(FormLabel, _Component);

  function FormLabel(props, context) {
    _classCallCheck(this, FormLabel);

    return _possibleConstructorReturn(this, (FormLabel.__proto__ || Object.getPrototypeOf(FormLabel)).call(this, props, context));
  }

  _createClass(FormLabel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          addon = _props.addon,
          children = _props.children,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ["addon", "children", "className"]); // context


      var form = this.context.$form;
      var formStyleType = form && form.styleType || undefined;
      var formGroup = this.context.$formGroup;
      var controlId = formGroup && formGroup.controlId || undefined;
      var validationState = formGroup && formGroup.validationState || undefined;
      var isCheckboxOrRadio = formGroup && formGroup.isCheckboxOrRadio || undefined;
      var classes = (0, _classnames.default)(className, styles.label, (_classNames = {}, _defineProperty(_classNames, styles.isHorizontal, formStyleType === 'horizontal'), _defineProperty(_classNames, styles["has-".concat(validationState)], validationState), _defineProperty(_classNames, styles.isCheckboxOrRadio, isCheckboxOrRadio), _classNames));

      if (!addon && !children) {
        return null;
      }

      return _react.default.createElement("label", _extends({}, elementProps, {
        className: classes,
        htmlFor: controlId
      }), children, addon && _react.default.createElement("span", {
        className: styles['label-addon']
      }, addon));
    }
  }]);

  return FormLabel;
}(_react.Component);

Object.defineProperty(FormLabel, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addon: undefined,
    children: undefined,
    className: undefined
  }
});
Object.defineProperty(FormLabel, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    addon: _propTypes.default.node,
    children: _propTypes.default.node,
    className: _propTypes.default.string
  }
});
Object.defineProperty(FormLabel, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    $form: _propTypes.default.object,
    $formGroup: _propTypes.default.object
  }
});

var _default = (0, _reactCssModules.default)(FormLabel, styles);

exports.default = _default;