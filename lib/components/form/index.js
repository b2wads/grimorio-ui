"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormGroup", {
  enumerable: true,
  get: function get() {
    return _formGroup.default;
  }
});
Object.defineProperty(exports, "FormLabel", {
  enumerable: true,
  get: function get() {
    return _formLabel.default;
  }
});
Object.defineProperty(exports, "FormControl", {
  enumerable: true,
  get: function get() {
    return _formControl.default;
  }
});
Object.defineProperty(exports, "FormActions", {
  enumerable: true,
  get: function get() {
    return _formActions.default;
  }
});
Object.defineProperty(exports, "FormHelpText", {
  enumerable: true,
  get: function get() {
    return _formHelpText.default;
  }
});
Object.defineProperty(exports, "FormControlLabel", {
  enumerable: true,
  get: function get() {
    return _formControlLabel.default;
  }
});
exports.default = void 0;

var _formComponent = _interopRequireDefault(require("./form-component"));

var _formGroup = _interopRequireDefault(require("./elements/form-group"));

var _formLabel = _interopRequireDefault(require("./elements/form-label"));

var _formControl = _interopRequireDefault(require("./elements/form-control"));

var _formActions = _interopRequireDefault(require("./elements/form-actions"));

var _formHelpText = _interopRequireDefault(require("./elements/form-help-text"));

var _formControlLabel = _interopRequireDefault(require("./elements/form-control-label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _formComponent.default;
exports.default = _default;