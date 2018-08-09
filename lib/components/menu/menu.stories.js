"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _menuItem = _interopRequireDefault(require("./elements/menu-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Menu', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Default', "This is the basic usage with the menu.", function () {
  return _react.default.createElement(_index.default, {
    items: [{
      key: 'dashboard',
      icon: 'dashboard',
      name: 'Dashboard',
      items: [{
        key: 'default',
        name: 'Default',
        link: '/default'
      }, {
        key: 'ecommerce',
        name: 'eCommerce',
        link: '/ecommerce'
      }, {
        key: 'newsportal',
        name: 'News Portal',
        link: '/news-portal'
      }]
    }, {
      key: 'charts',
      icon: 'insert_chart',
      name: 'Charts',
      items: [{
        key: 'test',
        name: 'Test',
        link: '/test'
      }]
    }]
  });
});
stories.addWithInfo('Manual', "", function () {
  return _react.default.createElement(_index.default, null, _react.default.createElement(_menuItem.default, {
    icon: "dashboard"
  }, "Dashboard", _react.default.createElement(_index.default, null, _react.default.createElement(_menuItem.default, null, "Default"), _react.default.createElement(_menuItem.default, null, "eCommerce"), _react.default.createElement(_menuItem.default, null, "News Portal"))), _react.default.createElement(_menuItem.default, {
    icon: "insert_chart"
  }, "Charts", _react.default.createElement(_index.default, null, _react.default.createElement(_menuItem.default, null, "Default"))));
});