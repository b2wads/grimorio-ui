"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _modal = _interopRequireDefault(require("../modal"));

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
var styles = {};

var ModalManager =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalManager, _PureComponent);

  function ModalManager() {
    _classCallCheck(this, ModalManager);

    return _possibleConstructorReturn(this, (ModalManager.__proto__ || Object.getPrototypeOf(ModalManager)).apply(this, arguments));
  }

  _createClass(ModalManager, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          modals = _props.modals,
          className = _props.className,
          effect = _props.effect,
          onDismiss = _props.onDismiss;
      return _react.default.createElement("div", {
        className: className
      }, modals && modals.map(function (item, index) {
        return _react.default.createElement(_modal.default, {
          key: item.header,
          data: item,
          effect: effect,
          onDismiss: onDismiss
        });
      }));
    }
  }]);

  return ModalManager;
}(_react.PureComponent);

Object.defineProperty(ModalManager, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    modals: undefined
  }
});
Object.defineProperty(ModalManager, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    modals: _propTypes.default.arrayOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      id: _propTypes.default.any.isRequired,
      header: _propTypes.default.string,
      body: _propTypes.default.any,
      footer: _propTypes.default.bool,
      actionButton: _propTypes.default.any,
      maxWidth: _propTypes.default.number
    })),
    className: _propTypes.default.string,
    effect: _propTypes.default.string,
    onDismiss: _propTypes.default.func
  }
});

var _default = (0, _reactCssModules.default)(ModalManager, styles);

exports.default = _default;