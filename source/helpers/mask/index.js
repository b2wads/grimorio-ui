import patternMask from './pattern';
import moneyMask from './money';
import { numberMask, thousandMask, percentageMask } from './number';
import alphaNumericMask from './alpha-numeric';
import alphaMask from './alpha';

export const masks = {
  datetime: '99/99/9999 99:99',
  date: '99/99/9999',
  time: '99:99:99',
  cep: '99999-999',
  cpf: '999.999.999-99',
  cnpj: '99.999.999/9999-99',
  phone: '(99) 99999-9999',
};

export const fieldsMask = (mask = { type: 'alphanumeric', value: null }, value) => {
  if (!value) {
    return '';
  }

  if (!mask || !mask.type || value === '') {
    return value;
  }

  switch (mask.type) {
    case 'cnpj':
      return patternMask(masks.cnpj, value);
    case 'cpf':
      return patternMask(masks.cpf, value);
    case 'time':
      return patternMask(masks.time, value);
    case 'date':
      return patternMask(masks.date, value);
    case 'datetime':
      return patternMask(masks.datetime, value);
    case 'cep':
      return patternMask(masks.cep, value);
    case 'phone':
      return patternMask(masks.phone, value);
    case 'pattern':
      return patternMask(mask.value, value);
    case 'money':
      return moneyMask(value);
    case 'number':
      return numberMask(value);
    case 'thousand':
      return thousandMask(value);
    case 'alphanumeric':
      return alphaNumericMask(value);
    case 'alpha':
      return alphaMask(value);
    case 'percentage':
      return percentageMask(value);
  }
};
