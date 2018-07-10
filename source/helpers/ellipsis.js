export const ellipsis = (str, len) => {
  if (str.length > len) {
    return `${str.substring(0, len + 4)} ...`;
  } else {
    return str;
  }
};
