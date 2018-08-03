"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookState = require("@dump247/storybook-state");

var _index = _interopRequireWildcard(require("./index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Accordion', module);
stories.addDecorator(_addonKnobs.withKnobs);

var renderContent = function renderContent() {
  return _react.default.createElement("ul", null, _react.default.createElement("li", null, "Default"), _react.default.createElement("li", null, "eCommerce"), _react.default.createElement("li", null, "news Portal"));
};

var options = {
  default: 'default',
  dark: 'dark'
};
stories.addWithInfo('Default', "This is the basic usage with the accordion.", function () {
  var isExclusive = (0, _addonKnobs.boolean)('exclusive', true);
  return _react.default.createElement(_index.default, {
    exclusive: isExclusive,
    type: (0, _addonKnobs.select)('Theme', options, 'default', '0'),
    panels: [{
      icon: 'insert_chart',
      title: 'Dashboard',
      content: renderContent()
    }, {
      icon: 'dashboard',
      title: 'Charts',
      content: 'segundo conteudo'
    }]
  });
});
stories.addWithInfo('Manual', "", (0, _storybookState.withState)({
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

  return _react.default.createElement(_index.default, null, _react.default.createElement(_index.AccordionTitle, {
    active: getActive(0),
    index: 0,
    onClick: handleClick
  }, "Um --"), _react.default.createElement(_index.AccordionContent, {
    active: getActive(0)
  }, "primeiro conteudo --"), _react.default.createElement(_index.AccordionTitle, {
    active: getActive(1),
    index: 1,
    onClick: handleClick
  }, "Dois --"), _react.default.createElement(_index.AccordionContent, {
    active: getActive(1)
  }, "segundo conteudo --"));
}));