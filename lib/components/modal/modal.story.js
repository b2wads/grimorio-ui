"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

var _button = _interopRequireDefault(require("../button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _react2.storiesOf)('Modal', module);
stories.addDecorator(_addonKnobs.withKnobs);

var body = function body() {
  return _react.default.createElement("div", null, _react.default.createElement("strong", null, "ALIBABA"), _react.default.createElement("em", null, "NADA"), _react.default.createElement("span", null, "\xC9"));
};

var button = function button() {
  return _react.default.createElement(_button.default, {
    style: "primary"
  }, "Ok");
};

var modal = {
  id: "".concat(new Date().getTime()),
  header: 'Termos de Segmentação',
  body: body(),
  footer: true,
  actionButton: button()
};
stories.addWithInfo('scaleUp', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'scaleUp',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('slideFromRight', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'slideFromRight',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('slideFromBottom', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'slideFromBottom',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('newspaper', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'newspaper',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('fall', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'fall',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('sideFall', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'sideFall',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('flipHorizontalThreeD', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'flipHorizontalThreeD',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('flipVerticalThreeD', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'flipVerticalThreeD',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('signThreeD', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'signThreeD',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('superScaled', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'superScaled',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('rotateFromBottomThreeD', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'rotateFromBottomThreeD',
    onDismiss: (0, _addonActions.action)('removed')
  });
});
stories.addWithInfo('rotateFromLeftThreeD', function () {
  return _react.default.createElement(_index.default, {
    data: modal,
    effect: 'rotateFromLeftThreeD',
    onDismiss: (0, _addonActions.action)('removed')
  });
});