const alphaMask = value => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  return value.replace(/[^a-zA-Z ]+/g, '');
};

export default alphaMask;
