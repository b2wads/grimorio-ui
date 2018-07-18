export const ellipsis = (str = '', len) => {
  if (str.length > len) {
    return `${str.substring(0, len - 3)}...`;
  } else {
    return str;
  }
};
