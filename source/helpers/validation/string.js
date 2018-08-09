export function letterValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  const regex = /[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ ]/g;

  if (value) {
    if (new RegExp(regex).test(value)) {
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

export function alphaNumericValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  const regex = /[^a-zA-ZãâÃÂáÁàÀêÊéÉèÈíÍìÌôÔõÕóÓòÒúÚùÙûÛçÇ0-9 ]/g;

  if (value) {
    if (new RegExp(regex).test(value)) {
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
