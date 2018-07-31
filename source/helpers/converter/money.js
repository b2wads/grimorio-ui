import { fieldsMask } from '../mask';

export const convertToBRL = value => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  let formatted = value.toString();

  if (formatted.indexOf('.') >= 0) {
    let count = formatted.split('.');
    count = count[1].length;

    formatted = formatted.replace(/[.]/g, '');

    if (count === 1) {
      formatted = `${formatted}0`;
    }
  } else {
    formatted = `${formatted}00`;
  }

  return fieldsMask({ type: 'money' }, formatted);
};
