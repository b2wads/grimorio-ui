export default function numberValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  if (value) {
    const regex = /[^0-9]/g;

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
