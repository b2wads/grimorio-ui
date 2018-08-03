"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _helpers = require("../../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles
var styles = {
  "form-group": "form-group_form-group_gI08z",
  "form-group--checkbox": "form-group_form-group--checkbox_2jz_F",
  "form-group--radio": "form-group_form-group--radio_29PiE",
  "form-group--withoutTopLabel": "form-group_form-group--withoutTopLabel_2qDxU",
  "form-group--horizontal": "form-group_form-group--horizontal_3h7AS",
  "form-group--inline": "form-group_form-group--inline_3O7Ta",
  "has-success": "form-group_has-success_1OC7v",
  "has-warning": "form-group_has-warning_3NfPx",
  "has-error": "form-group_has-error_3vUws"
};
var randomId = _helpers.property.randomId;

var FormGroup =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(FormGroup, _PureComponent);

  function FormGroup(props, context) {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).call(this, props, context));
  }

  _createClass(FormGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _props = this.props,
          controlId = _props.controlId,
          validationState = _props.validationState;
      var id = controlId ? controlId : randomId();
      return {
        $formGroup: {
          controlId: id,
          validationState: validationState
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          validationState = _props2.validationState,
          children = _props2.children,
          className = _props2.className,
          style = _props2.style,
          withoutTopLabel = _props2.withoutTopLabel;
      var validationStateClass = "has-".concat(validationState); // context

      var form = this.context.$form;
      var formStyleType = form && form.styleType || undefined;
      var formGroupClass = (0, _classnames.default)(className, styles['form-group'], (_classNames = {}, _defineProperty(_classNames, styles[validationStateClass], validationState), _defineProperty(_classNames, styles['form-group--checkbox'], style === 'checkbox'), _defineProperty(_classNames, styles['form-group--radio'], style === 'radio'), _defineProperty(_classNames, styles['form-group--withoutTopLabel'], withoutTopLabel), _defineProperty(_classNames, styles['form-group--horizontal'], formStyleType === 'horizontal'), _defineProperty(_classNames, styles['form-group--inline'], formStyleType === 'inline'), _classNames));
      return _react.default.createElement("div", {
        className: formGroupClass
      }, children);
    }
  }]);

  return FormGroup;
}(_react.PureComponent);

Object.defineProperty(FormGroup, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    controlId: '',
    style: undefined,
    validationState: undefined,
    withoutTopLabel: false
  }
});
Object.defineProperty(FormGroup, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    controlId: _propTypes.default.string,
    style: _propTypes.default.oneOf(['checkbox', 'radio']),
    validationState: _propTypes.default.oneOf(['success', 'warning', 'error']),
    withoutTopLabel: _propTypes.default.bool,
    children: _propTypes.default.node,
    className: _propTypes.default.string
  }
});
Object.defineProperty(FormGroup, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    $formGroup: _propTypes.default.object.isRequired
  }
});
Object.defineProperty(FormGroup, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    $form: _propTypes.default.object
  }
});

var _default = (0, _reactCssModules.default)(FormGroup, styles);

exports.default = _default;