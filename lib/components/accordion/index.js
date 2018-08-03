"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AccordionTitle", {
  enumerable: true,
  get: function get() {
    return _accordionTitle.default;
  }
});
Object.defineProperty(exports, "AccordionContent", {
  enumerable: true,
  get: function get() {
    return _accordionContent.default;
  }
});
exports.default = void 0;

var _accordionComponent = _interopRequireDefault(require("./accordion-component"));

var _accordionTitle = _interopRequireDefault(require("./elements/accordion-title"));

var _accordionContent = _interopRequireDefault(require("./elements/accordion-content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _accordionComponent.default;
exports.default = _default;