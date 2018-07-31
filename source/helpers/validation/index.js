import requiredValidation from './required';
import { datetimeValidation, startDateWithEndDateValidation, afterToday } from './datetime';
import oneRequiredValidation from './one-required';
import numberValidation from './number';
import { alphaNumericValidation, letterValidation } from './string';
import { minLengthValidation, maxLengthValidation } from './length';

export const fieldsValidation = (value, validation, schema, methods) => {
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
        let child = undefined;
        if (value && value.constructor === Array && value.length > 0) {
          if (value[0].constructor === Object) {
            const [item] = value;
            if (item.id) {
              child = 'id';
            }
            if (item.value) {
              child = 'value';
            }
          }
        }
        validationAndMessage = numberValidation(value, validationItem.message, child);
      }

      if (validationItem.rule === 'datetime' && validated(validationAndMessage)) {
        validationAndMessage = datetimeValidation(value, validationItem.message);
      }

      if (validationItem.rule === 'oneRequired' && validated(validationAndMessage)) {
        validationAndMessage = oneRequiredValidation(value, methods, validationItem, schema);
      }

      if (validationItem.rule === 'startDateWithEndDate' && validated(validationAndMessage)) {
        validationAndMessage = startDateWithEndDateValidation(value, methods, validationItem, schema);
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
