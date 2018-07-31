import patternMask from './pattern';
import moneyMask from './money';
import { numberMask, thousandMask, percentageMask } from './number';
import alphaNumericMask from './alpha-numeric';
import alphaMask from './alpha';

export const fieldsMask = (mask, value) => {
  if (!value) {
    return '';
  }

  if (!mask || !mask.type || value === '') {
    return value;
  }

  switch (mask.type) {
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

export const masks = {
  datetime: '##/##/#### ##:##',
  date: '##/##/####',
  time: '##:##:##',
  cep: '#####-###',
  cpf: '###.###.###-##',
  cnpj: '##.###.###/####-##',
};
