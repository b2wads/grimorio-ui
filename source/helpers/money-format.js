export const moneyFormat = int => {
  const rx = /(\d)(?=(\d{3})+\,)/g;

  if (typeof int !== 'number') {
    return null;
  }

  const num = `${int.toFixed(2)}`;
  return `R$ ${num.replace('.', ',').replace(rx, '$1.')}`;
};
