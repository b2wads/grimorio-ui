"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifierManager = exports.modalManager = void 0;

var modalManager = _interopRequireWildcard(require("./components/modal-manager/modal-manager-actions"));

exports.modalManager = modalManager;

var notifierManager = _interopRequireWildcard(require("./components/notifier-manager/notifier-manager-actions"));

exports.notifierManager = notifierManager;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }