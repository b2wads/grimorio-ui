"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@dump247/storybook-state");

var _index = _interopRequireWildcard(require("./index"));

var _svg = _interopRequireDefault(require("../svg"));

var _menu = _interopRequireWildcard(require("../menu"));

var _accordion = _interopRequireWildcard(require("../accordion"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var stories = (0, _react2.storiesOf)('Sidebar', module);
stories.addDecorator(_addonKnobs.withKnobs);
stories.addWithInfo('Default', (0, _storybookState.withState)({
  open: true,
  active: -1
})(function (_ref) {
  var store = _ref.store;

  var getActive = function getActive(index) {
    return store.state.active === index;
  };

  var handleClick = function handleClick(e, titleProps) {
    var index = titleProps.index;
    var active = store.state.active;
    var newIndex = active === index ? -1 : index;
    store.set({
      active: newIndex
    });
  };

  return _react.default.createElement("div", {
    style: {
      height: 800
    }
  }, _react.default.createElement(_index.default, {
    onClick: function onClick(e, open) {
      return store.set({
        open: open,
        active: !open ? -1 : store.state.active
      });
    }
  }, _react.default.createElement(_index.SidebarLogotype, null, store.state.open ? _react.default.createElement(_svg.default, {
    width: 188,
    height: 58,
    src: "logo/afiliados"
  }) : _react.default.createElement(_svg.default, {
    width: 24,
    src: "logo/afiliados-icon"
  })), _react.default.createElement(_index.SidebarContent, null, _react.default.createElement(_accordion.default, _extends({
    type: "accordionMenu",
    exclusive: false,
    as: _menu.default
  }, store.state), _react.default.createElement(_menu.MenuItem, {
    active: getActive(0)
  }, _react.default.createElement(_accordion.AccordionTitle, {
    active: getActive(0),
    index: 0,
    onClick: handleClick,
    icon: "dashboard"
  }, "Dashboard"), _react.default.createElement(_accordion.AccordionContent, {
    active: getActive(0)
  }, _react.default.createElement(_menu.default, null, _react.default.createElement(_menu.MenuItem, {
    link: "/default",
    handleClick: (0, _react2.action)('default')
  }, " Default"), _react.default.createElement(_menu.MenuItem, {
    link: "/ecommerce",
    handleClick: (0, _react2.action)('ecommerce')
  }, "eCommerce"), _react.default.createElement(_menu.MenuItem, {
    link: "/news-portal",
    handleClick: (0, _react2.action)('news-portal')
  }, "News Portal")))), _react.default.createElement(_menu.MenuItem, {
    active: getActive(1)
  }, _react.default.createElement(_accordion.AccordionTitle, {
    active: getActive(1),
    index: 1,
    onClick: handleClick,
    icon: "insert_chart"
  }, "Charts"), _react.default.createElement(_accordion.AccordionContent, {
    active: getActive(1)
  }, _react.default.createElement(_menu.default, null, _react.default.createElement(_menu.MenuItem, {
    link: "/test",
    handleClick: (0, _react2.action)('test')
  }, "Test"))))))));
}));