export const moneyFormat = (int, deconstructed = false) => {
  const rx = /(\d)(?=(\d{3})+\,)/g;

  if (typeof int !== 'number') {
    return null;
  }

  const num = `${int.toFixed(2)}`;
  const formatted = num.replace('.', ',').replace(rx, '$1.');
  const valuePieces = formatted.split(',');

  if (!deconstructed) {
    return `R$ ${formatted}`;
  } else {
    return {
      int: valuePieces[0],
      cent: valuePieces[1],
    };
  }
};
