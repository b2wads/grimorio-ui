export function minLengthValidation(value, length, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  if (value) {
    if (value.length < length) {
      validationState = 'error';
      errorMessage = message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }

  return {
    validationState,
    errorMessage,
  };
}

export function maxLengthValidation(value, length, message) {
  let validationState = undefined;
  let errorMessage = undefined;
  if (value) {
    if (value.length > length) {
      validationState = 'error';
      errorMessage = message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }

  return {
    validationState,
    errorMessage,
  };
}
