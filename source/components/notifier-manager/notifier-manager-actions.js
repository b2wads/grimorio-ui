import { NOTIFIER_SHOW, NOTIFIER_HIDE } from './notifier-manager-constants';

export function notifierShow(name, type, message, headline) {
  return {
    type: NOTIFIER_SHOW,
    payload: {
      name,
      type,
      message,
      headline,
    },
  };
}

export function notifierHide(name, id) {
  return {
    type: NOTIFIER_HIDE,
    payload: {
      name,
      id,
    },
  };
}
