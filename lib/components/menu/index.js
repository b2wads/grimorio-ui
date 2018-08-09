"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _menuItem.default;
  }
});
exports.default = void 0;

var _menuComponent = _interopRequireDefault(require("./menu-component"));

var _menuItem = _interopRequireDefault(require("./elements/menu-item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _menuComponent.default;
exports.default = _default;