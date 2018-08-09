"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _accordionPanel = _interopRequireDefault(require("./elements/accordion-panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// styles
var styles = {
  "iconLeft": "accordion_iconLeft_3Az5e",
  "iconRight": "accordion_iconRight_FQMzr",
  "title": "accordion_title_2gq7F",
  "content": "accordion_content_29Zpg",
  "isActive": "accordion_isActive_6zu2P",
  "dark": "accordion_dark_3QXy9",
  "accordionMenu": "accordion_accordionMenu_1F6Wu",
  "closed": "accordion_closed_2YX7Y"
};

var Accordion =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Accordion, _PureComponent);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call(this, props));
    _this.state = {
      activeIndex: props.exclusive ? -1 : []
    };
    _this.handleTitleClick = _this.handleTitleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Accordion, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.exclusive !== nextProps.exclusive) {
        this.setState({
          activeIndex: nextProps.exclusive ? -1 : []
        });
      }
    }
  }, {
    key: "isIndexActive",
    value: function isIndexActive(index) {
      var exclusive = this.props.exclusive;
      var activeIndex = this.state.activeIndex;
      return exclusive ? activeIndex === index : activeIndex.includes(index);
    }
  }, {
    key: "computeNewIndex",
    value: function computeNewIndex(index) {
      var exclusive = this.props.exclusive;
      var activeIndex = this.state.activeIndex;
      if (exclusive) return index === activeIndex ? -1 : index;
      return activeIndex.includes(index) ? activeIndex.filter(function (item) {
        return item !== index;
      }) : _toConsumableArray(activeIndex).concat([index]);
    }
  }, {
    key: "handleTitleClick",
    value: function handleTitleClick(e, titleProps) {
      var index = titleProps.index;
      this.setState({
        activeIndex: this.computeNewIndex(index)
      });
      if (this.props.onTitleClick) this.props.onTitleClick(e, titleProps);
    }
  }, {
    key: "renderPanels",
    value: function renderPanels(panels) {
      var _this2 = this;

      return panels.map(function (panel, index) {
        return _react.default.createElement(_accordionPanel.default, {
          active: _this2.isIndexActive(index),
          index: index,
          onTitleClick: _this2.handleTitleClick,
          content: panel
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          className = _props.className,
          panels = _props.panels,
          children = _props.children,
          as = _props.as,
          rest = _objectWithoutProperties(_props, ["className", "panels", "children", "as"]);

      var classes = (0, _classnames.default)(styles.accordion, className, (_classNames = {}, _defineProperty(_classNames, styles[this.props.type], this.props.type), _defineProperty(_classNames, styles[this.props.theme], this.props.theme), _defineProperty(_classNames, styles.closed, this.props.open === false), _classNames));
      var ElementType = as ? as : 'ul';
      return _react.default.createElement(ElementType, _extends({
        className: classes
      }, rest), children ? children : this.renderPanels(panels));
    }
  }]);

  return Accordion;
}(_react.PureComponent);

Object.defineProperty(Accordion, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    theme: 'default',
    exclusive: true,
    panels: []
  }
});
Object.defineProperty(Accordion, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    children: _propTypes.default.node,
    activeIndex: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.number), _propTypes.default.number]),
    className: _propTypes.default.string,
    defaultActiveIndex: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
    onTitleClick: _propTypes.default.func,
    exclusive: _propTypes.default.bool,
    type: _propTypes.default.oneOf(['accordionMenu']),
    theme: _propTypes.default.oneOf(['default', 'dark']),
    panels: _propTypes.default.arrayOf(_propTypes.default.shape({
      title: _propTypes.default.any,
      content: _propTypes.default.any
    }))
  }
});

var _default = (0, _reactCssModules.default)(Accordion, styles);

exports.default = _default;