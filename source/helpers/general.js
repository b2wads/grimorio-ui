export const uniqueId = (prefix = 'id') => {
  // Convert it to base 36 (numbers + letters), and grab the first 5 characters
  // after the decimal.
  return `${prefix}_${Math.random().toString(36).substr(2, 5)}`;
};

export const omit = (object = {}, omissionArray = []) => {
  return omissionArray.reduce((acc, current) => {
    delete object[current];
    acc = { ...object };
    return acc;
  }, {});
};

export const darkenLightenHex = (hex, percent) => {
  let [r, g, b] = `${hex}`.match(/\w\w/g).map(x => parseInt(x, 16));

  r = parseInt(r * (100 + percent) / 100);
  g = parseInt(g * (100 + percent) / 100);
  b = parseInt(b * (100 + percent) / 100);

  return `rgba(${r},${g},${b},${1})`;
};
