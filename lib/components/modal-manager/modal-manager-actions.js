"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modalShow = modalShow;
exports.modalHide = modalHide;

var _modalManagerConstants = require("./modal-manager-constants");

function modalShow(name, id, header, body, footer, actionButton) {
  return {
    type: _modalManagerConstants.MODAL_SHOW,
    payload: {
      name: name,
      id: id,
      header: header,
      body: body,
      footer: footer,
      actionButton: actionButton
    }
  };
}

function modalHide(name, id) {
  return {
    type: _modalManagerConstants.MODAL_HIDE,
    payload: {
      name: name,
      id: id
    }
  };
}