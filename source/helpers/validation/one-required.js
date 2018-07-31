export const populateValueData = fields =>
  fields.reduce((acc, item) => {
    if (item._type === 'field') {
      acc[item.key] = typeof item.value !== 'undefined' ? item.value : undefined;
    } else if (item._type === 'group') {
      return {
        ...acc,
        ...populateValueData(item.children),
      };
    }
    return acc;
  }, {});

export default function oneRequiredValidation(value, methods, validationItem, schema) {
  let validationState = undefined;
  let errorMessage = undefined;

  const getFieldValue = (fields, fieldNames, whenFields = [], data, values = {}) => {
    fields.map(item => {
      switch (item._type) {
        case 'group':
          getFieldValue(item.children, fieldNames, whenFields, data, values);
          break;
        case 'field':
          if (whenFields.length > 0) {
            fieldNames = fieldNames.concat(
              whenFields.reduce((acc, next) => {
                if (acc && !data[next.enable]) return acc;

                return data[next.enable] ? acc.concat(next.fieldsCheck) : acc;
              }, [])
            );
          }

          if (fieldNames.indexOf(item.key) >= 0) {
            values[item.key] = item.value;
            const validationAndMessage = {
              validationState,
              errorMessage,
            };
            methods.onChangeValidationState(item.key, validationAndMessage);
          }
      }
    });
    return values;
  };

  const data = populateValueData(schema);
  const validationValues = getFieldValue(schema, validationItem.fields, validationItem.whenFields, data);
  let hasValue = false;

  for (let value in validationValues) {
    if (hasValue) continue;

    if (
      typeof validationValues[value] !== 'undefined' &&
      validationValues[value].constructor === Array &&
      validationValues[value].length > 0
    ) {
      hasValue = true;
    } else if (
      typeof validationValues[value] !== 'undefined' &&
      validationValues[value].constructor === String &&
      validationValues[value] !== ''
    ) {
      hasValue = true;
    } else if (
      typeof validationValues[value] !== 'undefined' &&
      validationValues[value].constructor === Boolean &&
      validationValues[value] === true
    ) {
      hasValue = true;
    }
  }

  if (typeof value !== 'undefined') {
    if (
      (value.constructor === Array && value.length === 0 && !hasValue) ||
      (value.constructor === String && value === '' && !hasValue) ||
      (value.constructor === Boolean && value === false && !hasValue)
    ) {
      validationState = 'error';
      errorMessage = validationItem.message;
    } else {
      validationState = 'success';
      errorMessage = undefined;
    }
  } else if (typeof value === 'undefined' && hasValue) {
    validationState = undefined;
    errorMessage = undefined;
  } else {
    validationState = 'error';
    errorMessage = validationItem.message;
  }

  return {
    validationState,
    errorMessage,
  };
}
