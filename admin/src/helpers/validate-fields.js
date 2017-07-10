
/**
 * This module is used for the validation
 * of form fields. It returns a Map of
 * errors,
 */

// Predicates
const isEmpty = x => x.length === 0;
const isTypeString = x => typeof x === 'string';
// const isTypeNumber = x => typeof x === 'number';
// const isTypeBoolean = x => typeof x === 'boolean';

const validateFields = (required, fields) => {
  let errors = new Map([]);

  // We're not return a value here so we need
  // to diable the warning
  // eslint-disable-next-line
  required.map(function(rf) {
    const field = fields[rf.name];

    switch (rf.type) {
      case 'text':
        if (!isTypeString(field)) {
          errors.set(
            rf.name,
            'Field can only contain text'
          );
        }

        if (isEmpty(field)) {
          errors.set(
            rf.name,
            'Field cannot be empty'
          );
        }
        break;

      case 'textarea':
        if (!isTypeString(field)) {
          errors.set(
            rf.name,
            'Field can only contain text'
          );
        }

        if (isEmpty(field)) {
          errors.set(
            rf.name,
            'Field cannot be empty'
          );
        }
        break;

      default:
        break;
    }
  });

  return errors;
};

export default validateFields;
