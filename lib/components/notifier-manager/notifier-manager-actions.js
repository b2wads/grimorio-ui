"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notifierShow = notifierShow;
exports.notifierHide = notifierHide;

var _notifierManagerConstants = require("./notifier-manager-constants");

function notifierShow(name, type, message, headline) {
  return {
    type: _notifierManagerConstants.NOTIFIER_SHOW,
    payload: {
      name: name,
      type: type,
      message: message,
      headline: headline
    }
  };
}

function notifierHide(name, id) {
  return {
    type: _notifierManagerConstants.NOTIFIER_HIDE,
    payload: {
      name: name,
      id: id
    }
  };
}