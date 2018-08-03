"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "SidebarLogotype", {
  enumerable: true,
  get: function get() {
    return _sidebarLogotype.default;
  }
});
Object.defineProperty(exports, "SidebarContent", {
  enumerable: true,
  get: function get() {
    return _sidebarContent.default;
  }
});
exports.default = void 0;

var _sidebarComponent = _interopRequireDefault(require("./sidebar-component"));

var _sidebarLogotype = _interopRequireDefault(require("./elements/sidebar-logotype"));

var _sidebarContent = _interopRequireDefault(require("./elements/sidebar-content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _sidebarComponent.default;
exports.default = _default;