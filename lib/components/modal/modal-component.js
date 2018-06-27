"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _button = _interopRequireDefault(require("../button"));

var _icon = _interopRequireDefault(require("../icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles
var styles = {
  "overlay": "modal_overlay_TIiyp",
  "show": "modal_show_2yeyO",
  "content": "modal_content_3d2Fd",
  "header": "modal_header_oOgae",
  "header-title": "modal_header-title_1j661",
  "body": "modal_body_3zASx",
  "footer": "modal_footer_dXQSW",
  "scaleUp": "modal_scaleUp_Ismyn",
  "slideFromRight": "modal_slideFromRight_1VwqR",
  "slideFromBottom": "modal_slideFromBottom_3NdRP",
  "newspaper": "modal_newspaper_rKtaZ",
  "fall": "modal_fall_3-Le1",
  "sideFall": "modal_sideFall_2oBR0",
  "flipHorizontalThreeD": "modal_flipHorizontalThreeD_1rh0X",
  "flipVerticalThreeD": "modal_flipVerticalThreeD_FbOrG",
  "signThreeD": "modal_signThreeD_3mPuP",
  "superScaled": "modal_superScaled_2RgIR",
  "rotateFromBottomThreeD": "modal_rotateFromBottomThreeD_26t2l",
  "rotateFromLeftThreeD": "modal_rotateFromLeftThreeD_3iK9R"
};

var Modal =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
    _this.overlay = 'overlay';
    _this.content = 'content';
    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          effect = _props.effect,
          onDismiss = _props.onDismiss,
          data = _props.data,
          key = _props.key;

      if (!data) {
        return null;
      }

      var maxWidth = data ? "".concat(data.maxWidth, "px") : 'auto';
      return _react.default.createElement("div", {
        ref: function ref(c) {
          _this2.overlay = c;
        },
        className: styles.overlay,
        key: key
      }, _react.default.createElement("div", {
        ref: function ref(c) {
          _this2.content = c;
        },
        className: (0, _classnames.default)(styles.content, styles[effect]),
        style: {
          maxWidth: maxWidth
        }
      }, _react.default.createElement("div", null, data.header && _react.default.createElement("header", {
        className: styles.header
      }, _react.default.createElement("h3", {
        className: styles['header-title']
      }, data.header), _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return onDismiss(data);
        }
      }, _react.default.createElement(_icon.default, {
        name: "close"
      }))), _react.default.createElement("div", {
        className: styles.body
      }, data.body), data.footer && _react.default.createElement("footer", {
        className: styles.footer
      }, _react.default.createElement(_button.default, {
        onClick: function onClick() {
          return onDismiss(data);
        }
      }, "Fechar"), data.actionButton))));
    }
  }]);

  return Modal;
}(_react.PureComponent);

Object.defineProperty(Modal, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    effect: 'scaleUp',
    onDismiss: function onDismiss() {},
    data: {},
    key: undefined
  }
});
Object.defineProperty(Modal, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    effect: _propTypes.default.oneOf(['scaleUp', 'slideFromRight', 'slideFromBottom', 'newspaper', 'fall', 'sideFall', 'flipHorizontalThreeD', 'flipVerticalThreeD', 'signThreeD', 'superScaled', 'rotateFromBottomThreeD', 'rotateFromLeftThreeD']),
    onDismiss: _propTypes.default.func,
    data: _propTypes.default.object,
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
  }
});

var _default = (0, _reactCssModules.default)(Modal, styles);

exports.default = _default;