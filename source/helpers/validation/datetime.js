import moment from 'moment';

export function datetimeValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  // 23/06/2017 10:00
  const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} \d{2}:\d{2}$/g;
  if (new RegExp(regex).test(value)) {
    validationState = 'success';
    errorMessage = undefined;
  } else {
    validationState = 'error';
    errorMessage = message;
  }

  return {
    validationState,
    errorMessage,
  };
}

export const afterToday = (value, validationItem) => {
  const today = moment();
  let validationState;
  let errorMessage;

  if (!value) {
    validationState = 'error';
    errorMessage = 'value is undefined';
  } else if (!validationItem) {
    validationState = 'error';
    errorMessage = 'validationItem is undefined';
  } else if (!validationItem.message) {
    validationState = 'error';
    errorMessage = 'message is undefined';
  } else {
    if (today.isAfter(moment(value, 'DD/MM/YYYY HH:mm'))) {
      validationState = 'error';
      errorMessage = validationItem.message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }
  return {
    validationState,
    errorMessage,
  };
};
