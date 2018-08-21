export const moneyFormat = (int, symbol = true) => {
  const rx = /(\d)(?=(\d{3})+\,)/g;

  if (typeof int !== 'number') {
    return null;
  }

  const num = `${int.toFixed(2)}`;
  const formatted = num.replace('.', ',').replace(rx, '$1.');

  if (symbol) {
    return `R$ ${formatted}`;
  } else {
    return formatted;
  }
};
