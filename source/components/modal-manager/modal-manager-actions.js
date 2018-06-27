import { MODAL_SHOW, MODAL_HIDE } from './modal-manager-constants';

export function modalShow(name, id, header, body, footer, actionButton) {
  return {
    type: MODAL_SHOW,
    payload: {
      name,
      id,
      header,
      body,
      footer,
      actionButton,
    },
  };
}

export function modalHide(name, id) {
  return {
    type: MODAL_HIDE,
    payload: {
      name,
      id,
    },
  };
}
