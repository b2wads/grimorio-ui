"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "modalManager", {
  enumerable: true,
  get: function get() {
    return _modalManagerReducer.default;
  }
});
Object.defineProperty(exports, "notifierManager", {
  enumerable: true,
  get: function get() {
    return _notifierManagerReducer.default;
  }
});

var _modalManagerReducer = _interopRequireDefault(require("./components/modal-manager/modal-manager-reducer"));

var _notifierManagerReducer = _interopRequireDefault(require("./components/notifier-manager/notifier-manager-reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }