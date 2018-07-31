import moment from 'moment';

export function datetimeValidation(value, message) {
  let validationState = undefined;
  let errorMessage = undefined;

  // 23/06/2017 10:00
  const regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4} \d{2}:\d{2}$/g;
  if (new RegExp(regex).test(value)) {
    validationState = 'success';
    errorMessage = undefined;
  } else {
    validationState = 'error';
    errorMessage = message;
  }

  return {
    validationState,
    errorMessage,
  };
}

export function startDateWithEndDateValidation(value, methods, validationItem, schema) {
  let validationState = undefined;
  let errorMessage = undefined;

  const getTimeConvert = datetime => {
    if (!datetime) {
      return {
        validationState,
        errorMessage,
      };
    }

    let [date, hour] = datetime.split(' ');
    date = date.split('/').reverse().join('-');

    return new Date(`${date}T${hour}`).getTime();
  };
  const data = {};
  const getFieldValue = (schema, validation, data) => {
    schema.map(item => {
      switch (item._type) {
        case 'group':
          getFieldValue(item.children, validation, data);
          break;
        case 'field':
          if (validation.from === item.key || validation.to === item.key) {
            if (validation.from === item.key) {
              data.from = true;
              data.value = item.value;
            }

            if (validation.to === item.key) {
              data.to = true;
              data.value = item.value;
            }

            const validationAndMessage = {
              validationState,
              errorMessage,
            };
            methods.onChangeValidationState(item.key, validationAndMessage);
          }
      }
    });
    return data;
  };

  const validationValue = getFieldValue(schema, validationItem.date, data);
  const currentValue = getTimeConvert(value);
  const otherValue = getTimeConvert(validationValue.value);

  if (validationValue.from && typeof otherValue !== 'undefined') {
    if (currentValue <= otherValue) {
      validationState = 'error';
      errorMessage = validationItem.message;
    }
  } else if (validationValue.to && typeof otherValue !== 'undefined') {
    if (currentValue >= otherValue) {
      validationState = 'error';
      errorMessage = validationItem.message;
    }
  }

  return {
    validationState,
    errorMessage,
  };
}

export const afterToday = (value, validationItem) => {
  const today = moment();
  let validationState;
  let errorMessage;

  if (!value) {
    validationState = 'error';
    errorMessage = 'value is undefined';
  } else if (!validationItem) {
    validationState = 'error';
    errorMessage = 'validationItem is undefined';
  } else if (!validationItem.message) {
    validationState = 'error';
    errorMessage = 'message is undefined';
  } else {
    if (today.isAfter(moment(value, 'DD/MM/YYYY HH:mm'))) {
      validationState = 'error';
      errorMessage = validationItem.message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  }
  return {
    validationState,
    errorMessage,
  };
};
