"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var initialState = (0, _immutable.Map)({
  notifiers: []
});
var notifiers = undefined;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'NOTIFIER_SHOW':
      return state.set('notifiers', state.get('notifiers').concat({
        name: action.payload.name,
        id: "".concat(new Date().getTime()),
        type: action.payload.type,
        headline: action.payload.headline,
        message: action.payload.message
      }));

    case 'NOTIFIER_HIDE':
      notifiers = state.get('notifiers').filter(function (item) {
        return item.id !== action.payload.id;
      });
      return state.set('notifiers', notifiers);

    default:
      return state;
  }
};

exports.default = _default;