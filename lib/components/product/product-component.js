"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCssModules = _interopRequireDefault(require("react-css-modules"));

var _classnames = _interopRequireDefault(require("classnames"));

var _clipboard = _interopRequireDefault(require("clipboard"));

var _moment = _interopRequireDefault(require("moment"));

var _svg = _interopRequireDefault(require("../svg"));

var _icon = _interopRequireDefault(require("../icon"));

var _button = _interopRequireDefault(require("../button"));

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _helpers = require("../../helpers");

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

var styles = {
  "facebook": "product_facebook_2XVdp",
  "twitter": "product_twitter_1gG2i",
  "default": "product_default_3gP1j",
  "card": "product_card_1g0je",
  "imgCustom": "product_imgCustom_1Dz9w",
  "imgDefault": "product_imgDefault_3POek",
  "tag": "product_tag_RpO41",
  "tagHighlight": "product_tagHighlight_3EiM9",
  "imgWrapper": "product_imgWrapper_2PbN0",
  "name": "product_name_2b9As",
  "isShort": "product_isShort_1flED",
  "rules": "product_rules_1_nKQ",
  "rulesIcon": "product_rulesIcon_1-AFr",
  "expires": "product_expires_32NIu",
  "social": "product_social_pdCy8",
  "copy": "product_copy_7b2QE",
  "copyIcon": "product_copyIcon_C_qnM",
  "info": "product_info_2RGjA"
};

var Product =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Product, _PureComponent);

  function Product() {
    var _this;

    _classCallCheck(this, Product);

    _this = _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).call(this));
    _this.state = {
      linkCopied: false,
      btnId: "-copy-".concat(_helpers.property.randomId())
    };
    return _this;
  }

  _createClass(Product, [{
    key: "share",
    value: function share(type, link) {
      return function () {
        return _helpers.shareOn[type](link);
      };
    }
  }, {
    key: "renderInfo",
    value: function renderInfo() {
      var info = this.props.data.info;

      if (!info) {
        return null;
      }

      return _react.default.createElement("div", {
        className: styles.info
      }, typeof info.value === 'number' ? (0, _helpers.moneyFormat)(info.value) : info.value, info.rules && _react.default.createElement(_tooltip.default, {
        className: styles.rules,
        width: "220px",
        message: info.rules
      }, _react.default.createElement("span", {
        className: styles.rulesIcon
      }, "?")));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      var tags = this.props.data.tags;

      if (!tags) {
        return null;
      }

      return tags.map(function (tag) {
        var key = "".concat(tag.type, "-").concat(tag.value);

        switch (tag.type) {
          case 'brand':
            return _react.default.createElement(_svg.default, {
              key: key,
              width: 48,
              height: 48,
              src: "logo/".concat(tag.value)
            });

          case 'highlight':
            return tag.value && _react.default.createElement(_svg.default, {
              key: key,
              className: styles.tagHighlight,
              width: 32,
              height: 32,
              src: "flame"
            });

          default:
            return '';
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clipboard && this.clipboard.destroy();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.clipboard = new _clipboard.default(".".concat(this.state.btnId));
      this.clipboard.on('success', function () {
        _this2.setState({
          linkCopied: true
        });

        setTimeout(function () {
          return _this2.setState({
            linkCopied: false
          });
        }, 1500);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          linkCopied = _state.linkCopied,
          btnId = _state.btnId;

      var _props = this.props,
          className = _props.className,
          type = _props.type,
          btnText = _props.btnText,
          elementProps = _objectWithoutProperties(_props, ["className", "type", "btnText"]);

      var _props$data = this.props.data,
          img = _props$data.img,
          name = _props$data.name,
          info = _props$data.info,
          expires = _props$data.expires,
          link = _props$data.link,
          copyValue = _props$data.copyValue;
      var fullClassName = (0, _classnames.default)(className, _defineProperty({}, styles[type], type));

      if (!name || !link || !info) {
        return null;
      }

      return _react.default.createElement("section", _extends({}, elementProps, {
        className: fullClassName
      }), _react.default.createElement("div", {
        className: styles.tag
      }, this.renderTags()), _react.default.createElement("div", {
        className: styles.imgWrapper
      }, _react.default.createElement("a", {
        href: link
      }, img ? _react.default.createElement("img", {
        className: styles.imgCustom,
        src: img,
        alt: name
      }) : _react.default.createElement(_svg.default, {
        className: styles.imgDefault,
        src: "cupom"
      }))), _react.default.createElement("h1", {
        className: (0, _classnames.default)(styles.name, _defineProperty({}, styles.isShort, name.length < 31))
      }, _react.default.createElement("a", {
        href: link
      }, name)), this.renderInfo(), expires && _react.default.createElement("div", {
        className: styles.expires
      }, "Valido at\xE9: ".concat((0, _moment.default)(expires).format('DD/MM/YYYY H:mm'))), _react.default.createElement("div", {
        className: styles.social
      }, _react.default.createElement(_button.default, {
        active: linkCopied,
        "data-clipboard-text": copyValue ? copyValue : link,
        className: (0, _classnames.default)(styles.copy, btnId),
        size: "small"
      }, linkCopied ? 'Copiado!' : btnText, _react.default.createElement(_icon.default, {
        className: styles.copyIcon,
        name: linkCopied ? 'check' : 'link',
        size: 18
      })), _react.default.createElement(_svg.default, {
        onClick: this.share('facebook', link),
        className: styles.facebook,
        align: "top",
        width: 26,
        height: 26,
        src: "icon/facebook-square"
      }), _react.default.createElement(_svg.default, {
        onClick: this.share('twitter', link),
        className: styles.twitter,
        align: "top",
        width: 26,
        height: 26,
        src: "icon/twitter-square"
      })));
    }
  }]);

  return Product;
}(_react.PureComponent);

Object.defineProperty(Product, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type: _propTypes.default.oneOf(['default', 'card']),
    btnText: _propTypes.default.string,
    data: _propTypes.default.shape({
      name: _propTypes.default.string.isRequired,
      link: _propTypes.default.string.isRequired,
      img: _propTypes.default.string.isRequired,
      info: _propTypes.default.shape({
        value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
        rules: _propTypes.default.string
      }).isRequired,
      expires: _propTypes.default.string,
      copyValue: _propTypes.default.string,
      tags: _propTypes.default.arrayOf(_propTypes.default.shape({
        type: _propTypes.default.string,
        value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool])
      }))
    })
  }
});
Object.defineProperty(Product, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    type: 'default',
    btnText: 'Copiar Link',
    data: {}
  }
});

var _default = (0, _reactCssModules.default)(Product, styles);

exports.default = _default;