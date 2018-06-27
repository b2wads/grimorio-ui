"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _days = _interopRequireDefault(require("./days"));

var _months = _interopRequireDefault(require("./months"));

var _years = _interopRequireDefault(require("./years"));

var _time = _interopRequireDefault(require("./time"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(CalendarContainer, _PureComponent);

  function CalendarContainer(props) {
    var _this;

    _classCallCheck(this, CalendarContainer);

    _this = _possibleConstructorReturn(this, (CalendarContainer.__proto__ || Object.getPrototypeOf(CalendarContainer)).call(this, props));
    _this.viewComponents = {
      days: _days.default,
      months: _months.default,
      years: _years.default,
      time: _time.default
    };
    return _this;
  }

  _createClass(CalendarContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          view = _props.view,
          viewProps = _objectWithoutProperties(_props, ["view"]);

      var Component = this.viewComponents[view];
      return _react.default.createElement(Component, viewProps);
    }
  }]);

  return CalendarContainer;
}(_react.PureComponent);

Object.defineProperty(CalendarContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    view: 'days'
  }
});
Object.defineProperty(CalendarContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    view: _propTypes.default.string
  }
});
var _default = CalendarContainer;
exports.default = _default;