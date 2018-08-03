"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _productComponent = _interopRequireDefault(require("./product-component"));

var _panel = _interopRequireDefault(require("../panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var stories = (0, _react2.storiesOf)('Product', module);
stories.addDecorator(_addonKnobs.withKnobs);
var pannelSize = {
  flexBasis: '20%',
  minWidth: '250px'
};
var exampleProduct = {
  img: 'https://images-americanas.b2w.io/produtos/01/00/sku/33446/6/33446652_4GG.jpg',
  name: 'Notebook Profissional Avell W155 MX Intel Core i7 16GB (GeForce MX150) 1TB 15.6 FullHD',
  info: {
    value: 5333.20
  },
  expires: '2018-07-08 23:59',
  link: 'https://www.americanas.com.br/produto/33446653/notebook-profissional-avell-w155-mx-intel-core-i7-16gb-geforce-mx150-1tb-15-6-fullhd',
  tags: [{
    type: 'brand',
    value: 'acom'
  }, {
    type: 'highlight',
    value: true
  }]
};
var exampleCupom = {
  name: '10% com o cupom ALO10',
  info: {
    value: 'ALO10',
    rules: 'Confira as regras no site https://www.americanas.com.br/hotsite/regras-do-site'
  },
  expires: '2018-07-08 23:59',
  copy: 'ALO10',
  link: 'http://www.americanas.com.br/categoria/celulares-e-smartphones/f/tag-tag_alo10_acom?opn=AFLACOM&epar=b2wafiliados&franq=AFL-03-101718',
  tags: [{
    type: 'brand',
    value: 'shop'
  }, {
    type: 'highlight',
    value: true
  }]
};

var exampleCupomCard = _objectSpread({}, exampleCupom, {
  expires: null,
  tags: []
});

var exampleProductCard = _objectSpread({}, exampleProduct, {
  expires: null,
  tags: [{
    type: 'highlight',
    value: true
  }]
});

stories.addWithInfo('Default', function () {
  return _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_panel.default, {
    style: pannelSize
  }, _react.default.createElement(_productComponent.default, {
    data: (0, _addonKnobs.object)('Product', exampleProduct)
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panel.default, {
    style: pannelSize
  }, _react.default.createElement(_productComponent.default, {
    btnText: "Pegar Cupom",
    data: (0, _addonKnobs.object)('Cupom', exampleCupom)
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panel.default, {
    style: pannelSize
  }, _react.default.createElement(_productComponent.default, null)));
});
stories.addWithInfo('Card', function () {
  return _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_panel.default, {
    type: "brand",
    brand: "acom",
    style: pannelSize
  }, _react.default.createElement(_productComponent.default, {
    type: "card",
    data: (0, _addonKnobs.object)('Product', exampleProductCard)
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panel.default, {
    type: "brand",
    brand: "suba",
    style: pannelSize
  }, _react.default.createElement(_productComponent.default, {
    type: "card",
    btnText: "Copiar Cupom",
    data: (0, _addonKnobs.object)('Cupom', exampleCupomCard)
  })));
});