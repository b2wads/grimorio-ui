const moneyMask = (value, options) => {
  const invalidValue = !value && value !== '';
  let invalidType;

  if (!invalidValue) {
    invalidType = value.constructor !== String && value.constructor !== Number;
  }

  if (invalidValue || invalidType) {
    return false;
  }

  let opts = options || {};

  opts = {
    delimiter: opts.delimiter || '.',
    lastOutput: opts.lastOutput,
    precision: opts.hasOwnProperty('precision') ? opts.precision : 2,
    separator: opts.separator || ',',
    showSignal: opts.showSignal,
    suffixUnit: (opts.suffixUnit && ` ${opts.suffixUnit.replace(/[\s]/g, '')}`) || '',
    unit: (opts.unit && `${opts.unit.replace(/[\s]/g, '')} `) || '',
    zeroCents: opts.zeroCents,
  };

  opts.moneyPrecision = opts.zeroCents ? 0 : opts.precision;

  if (opts.zeroCents) {
    opts.lastOutput = opts.lastOutput || '';
    let zeroMatcher = `(${opts.separator}[0]{0,${opts.precision}})`;
    let zeroRegExp = new RegExp(zeroMatcher, 'g');
    let digitsLength = value.toString().replace(/[\D]/g, '').length || 0;
    let lastDigitLength = opts.lastOutput.toString().replace(/[\D]/g, '').length || 0;

    value = value.toString().replace(zeroRegExp, '');

    if (digitsLength < lastDigitLength) {
      value = value.slice(0, value.length - 1);
    }
  }

  let number = value.toString().replace(/[\D]/g, '');
  let clearDelimiter = new RegExp(`^(0|\\${opts.delimiter})`);
  let clearSeparator = new RegExp(`(\\${opts.separator})$`);
  let money = number.substr(0, number.length - opts.moneyPrecision);
  let masked = money.substr(0, money.length % 3);
  let cents = new Array(opts.precision + 1).join('0');

  money = money.substr(money.length % 3, money.length);

  for (let i = 0, len = money.length; i < len; i++) {
    if (i % 3 === 0) {
      masked += opts.delimiter;
    }
    masked += money[i];
  }

  masked = masked.replace(clearDelimiter, '');
  masked = masked.length ? masked : '0';

  let signal = '';

  if (opts.showSignal === true) {
    signal = value < 0 || (value.startsWith && value.startsWith('-')) ? '-' : '';
  }

  if (!opts.zeroCents) {
    let beginCents = number.length - opts.precision;
    let centsValue = number.substr(beginCents, opts.precision);
    let centsLength = centsValue.length;
    let centsSliced = opts.precision > centsLength ? opts.precision : centsLength;

    cents = (cents + centsValue).slice(-centsSliced);
  }

  let output = opts.unit + signal + masked + opts.separator + cents;

  return output.replace(clearSeparator, '') + opts.suffixUnit;
};

export default moneyMask;
