export const numberMask = value => {
  const invalidValue = !value && value !== ''; // empty is valid
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.toString().replace(/(?!^-)[^0-9]/g, '');
};

export const thousandMask = value => {
  const invalidValue = !value && value !== ''; // empty is valid
  let invalidType;
  let tmp = value;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  tmp = tmp.toString().replace(/\D+/g, '');
  tmp = tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return tmp;
};

export const percentageMask = value => {
  const invalidValue = !value && value !== ''; // empty is valid
  let invalidType;
  let tmp = value;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  tmp = tmp.toString().replace(/\D+/g, '');

  if (tmp.length === 3 && tmp !== '100') {
    tmp = tmp.replace(/([0-9]{1})$/g, ',$1');
  }

  if (parseInt(tmp) > 100) {
    tmp = '100';
  }

  return tmp;
};
