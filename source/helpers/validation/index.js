import requiredValidation from './required';
import { datetimeValidation, afterToday } from './datetime';
import numberValidation from './number';
import { alphaNumericValidation, letterValidation } from './string';
import { minLengthValidation, maxLengthValidation } from './length';

export const fieldsValidation = (value, validation) => {
  let validationAndMessage = {
    validationState: undefined,
    errorMessage: undefined,
  };

  const validated = validationAndMessage => {
    return validationAndMessage.validationState !== 'error';
  };

  if (validation) {
    validation.map(validationItem => {
      if (validationItem.rule === 'required') {
        validationAndMessage = requiredValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'alphanumeric' && validated(validationAndMessage)) {
        validationAndMessage = alphaNumericValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'letter' && validated(validationAndMessage)) {
        validationAndMessage = letterValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'number' && validated(validationAndMessage)) {
        validationAndMessage = numberValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'datetime' && validated(validationAndMessage)) {
        validationAndMessage = datetimeValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'afterToday' && validated(validationAndMessage)) {
        validationAndMessage = afterToday(value, validationItem);
      }

      if (validationItem.rule === 'minLength' && validated(validationAndMessage)) {
        validationAndMessage = minLengthValidation(value, validationItem.length, validationItem.message);
      }

      if (validationItem.rule === 'maxLength' && validated(validationAndMessage)) {
        validationAndMessage = maxLengthValidation(value, validationItem.length, validationItem.message);
      }
    });
  }

  return validationAndMessage;
};
