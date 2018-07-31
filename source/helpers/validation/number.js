export default function numberValidation(item, message, child) {
  let validationState = undefined;
  let errorMessage = undefined;
  let value = undefined;

  if (item) {
    if (item.constructor === Array && item.length > 0) {
      const lastItem = item[item.length - 1];
      if (lastItem[child]) {
        value = lastItem[child];
      }
    } else if (item.constructor !== Array) {
      value = item;
    }

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
  }

  return {
    validationState,
    errorMessage,
  };
}
