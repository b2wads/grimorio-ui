"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _panelComponent = _interopRequireDefault(require("./panel-component"));

var _button = _interopRequireDefault(require("../button"));

var _product = _interopRequireDefault(require("../product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    type: 'highlight',
    value: true
  }]
};
var stories = (0, _react2.storiesOf)('Panel', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Default', function () {
  return _react.default.createElement("div", {
    style: {
      width: '25%'
    }
  }, _react.default.createElement(_panelComponent.default, null, "Simple Panel"), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panelComponent.default, {
    title: "Title"
  }, _react.default.createElement("p", null, "Content"), _react.default.createElement(_button.default, null, "Send")));
});
stories.addWithInfo('Brand', function () {
  return _react.default.createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react.default.createElement(_panelComponent.default, {
    brand: "suba",
    style: pannelSize
  }, _react.default.createElement(_product.default, {
    type: "card",
    data: exampleProduct
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panelComponent.default, {
    brand: "acom",
    style: pannelSize
  }, _react.default.createElement(_product.default, {
    type: "card",
    data: exampleProduct
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panelComponent.default, {
    brand: "shop",
    style: pannelSize
  }, _react.default.createElement(_product.default, {
    type: "card",
    data: exampleProduct
  })), "\xA0\xA0\xA0\xA0", _react.default.createElement(_panelComponent.default, {
    brand: "soub",
    style: pannelSize
  }, _react.default.createElement(_product.default, {
    type: "card",
    data: exampleProduct
  })));
});