const patternMask = (mask, value) => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (!mask || invalidValue || invalidType) {
    return false;
  }

  const DIGIT = '9';
  const ALPHA = 'A';
  const ALPHANUM = 'S';
  const pattern = mask;
  const patternChars = pattern.replace(/\W/g, '');
  const output = pattern.split('');
  const values = value.toString().replace(/\W/g, '');
  const charsValues = values.replace(/\W/g, '');
  let i;
  let len;
  let index = 0;

  for ((i = 0), (len = output.length); i < len; i++) {
    if (index >= values.length) {
      if (patternChars.length === charsValues.length) {
        return output.join('');
      } else {
        break;
      }
    } else {
      const isDigit = output[i] === DIGIT && values[index].match(/[0-9]/);
      const isAlpha = output[i] === ALPHA && values[index].match(/[a-zA-Z]/);
      const isAlphanumeric = output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/);

      if (isDigit || isAlpha || isAlphanumeric) {
        output[i] = values[index++];
      } else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
        return output.slice(0, i).join('');
      }
    }
  }
  return output.join('').substr(0, i);
};

export default patternMask;
