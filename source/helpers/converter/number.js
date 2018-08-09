export const convertToFloat = value => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (value === '') {
    return value;
  }

  if (value && value.constructor === Number) {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  let newValue = value;

  newValue = newValue.replace(/[.]/g, '');
  newValue = newValue.replace(/[,]/g, '.');

  return parseFloat(newValue);
};

export const convertToDecimal = value => {
  const invalidValue = !value;
  let invalidType;

  if (value === '') {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  let newValue = value.toString();

  newValue = newValue.replace(/[.]/g, ',');

  return newValue;
};

export const convertToZeroFilled = (value, digits) => {
  const invalidValue = !value || !digits;
  let invalidType;

  if (value === '') {
    return value;
  }

  if (!invalidValue) {
    invalidType = value.constructor !== Number && value.constructor !== String && digits.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  let num = digits;
  let digitsQuantity = '';
  let newValue = value.toString();

  while (num > 0) {
    digitsQuantity = `${digitsQuantity}0`;
    num--;
  }

  newValue = digitsQuantity.substring(0, digitsQuantity.length - newValue.length) + newValue;

  return newValue;
};
