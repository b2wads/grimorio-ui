const alphaNumericMask = value => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.replace(/[^a-z0-9 ]+/g, '');
};

export default alphaNumericMask;
