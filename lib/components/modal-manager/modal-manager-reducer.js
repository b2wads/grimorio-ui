"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = require("immutable");

var initialState = (0, _immutable.Map)({
  modals: []
});
var modals = undefined;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'MODAL_SHOW':
      return state.set('modals', state.get('modals').concat({
        name: action.payload.name,
        id: action.payload.id,
        header: action.payload.header,
        body: action.payload.body,
        footer: action.payload.footer,
        actionButton: action.payload.actionButton,
        maxWidth: 600
      }));

    case 'MODAL_HIDE':
      modals = state.get('modals').filter(function (item) {
        return item.id !== action.payload.id;
      });
      return state.set('modals', modals);

    default:
      return state;
  }
};

exports.default = _default;