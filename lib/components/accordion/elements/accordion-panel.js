"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _accordionTitle = _interopRequireDefault(require("./accordion-title"));

var _accordionContent = _interopRequireDefault(require("./accordion-content"));

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
  "iconLeft": "accordion_iconLeft_3Az5e",
  "iconRight": "accordion_iconRight_FQMzr",
  "title": "accordion_title_2gq7F",
  "content": "accordion_content_29Zpg",
  "isActive": "accordion_isActive_6zu2P",
  "dark": "accordion_dark_3QXy9",
  "accordionMenu": "accordion_accordionMenu_1F6Wu",
  "closed": "accordion_closed_2YX7Y"
};

var AccordionPanel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(AccordionPanel, _PureComponent);

  function AccordionPanel() {
    _classCallCheck(this, AccordionPanel);

    return _possibleConstructorReturn(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).apply(this, arguments));
  }

  _createClass(AccordionPanel, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          active = _props.active,
          content = _props.content,
          index = _props.index,
          onTitleClick = _props.onTitleClick,
          children = _props.children;
      if (children) return children;
      return _react.default.createElement("li", null, _react.default.createElement(_accordionTitle.default, {
        active: active,
        index: index,
        key: "title",
        onClick: onTitleClick,
        icon: content.icon,
        content: content.title
      }), _react.default.createElement(_accordionContent.default, {
        active: active,
        key: "content",
        content: content.content
      }));
    }
  }]);

  return AccordionPanel;
}(_react.PureComponent);

Object.defineProperty(AccordionPanel, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    active: _propTypes.default.bool,
    content: _propTypes.default.object,
    index: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    onTitleClick: _propTypes.default.func,
    title: _propTypes.default.node
  }
});

var _default = (0, _reactCssModules.default)(AccordionPanel, styles);

exports.default = _default;