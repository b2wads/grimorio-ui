export default function requiredValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  const exists = typeof value !== 'undefined';
  if (exists) {
    const stringValue = value.constructor === String && value !== '';
    const numberValue = value.constructor === Number;
    const arrayValue = value.constructor === Array && value.length > 0;
    const verifyObject = value => {
      let exists = false;

      if (value.hasOwnProperty('valid')) {
        if (value.valid === true) {
          exists = true;
        }
      } else {
        Object.keys(value).forEach(key => {
          if (value[key]) {
            exists = true;
          }
        });
      }

      return exists;
    };
    const objectValue = value.constructor === Object && verifyObject(value);

    if (stringValue || numberValue || arrayValue || objectValue) {
      validationState = 'success';
      errorMessage = undefined;
    } else {
      validationState = 'error';
      errorMessage = message;
    }
  } else {
    validationState = 'error';
    errorMessage = message;
  }

  return {
    validationState,
    errorMessage,
  };
}
