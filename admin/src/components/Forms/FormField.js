import React, { Component }from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames'

import {
  REGISTER_REQUIRED_FIELD
} from '../../pages/constants';
import styles from './form-field-styles';

class FormField extends Component {
  componentDidMount() {
    const { required, name, type, registerField } = this.props;

    // Add this field to the required fields array
    // in the store so we can validate it on save
    if (required) {
      registerField(name, type);
    }
  }

  render() {
    const {
      defaultValue,
      errors,
      helptext,
      label,
      name,
      onChange,
      placeholder,
      required,
      type,
      value,

      // Modifiers
      small,
    } = this.props;

    // errors is a map
    const error = errors && errors.get(name);

    const labelCls = classNames([
      'FormField',
      {
        'FormField--error': error,
      },
    ]);

    const inputCls = classNames([
      'FormField__input',
      {
        'FormField__input--error': error,
        'FormField__input--small': small,
      },
    ]);

    return (
      <label
        className={labelCls}
        htmlFor={name}
      >
        <span className="FormField__text">
          { label }
          { required &&
            <span className="FormField__required">
              (required)
            </span>
          }
        </span>

        { type === 'textarea' ?
          <textarea
            className={inputCls}
            defaultValue={defaultValue}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            style={{ minHeight: '100px' }}
            value={value}
          /> :
          <input
            className={inputCls}
            defaultValue={defaultValue}
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
          />
        }

        { helptext &&
          <span className="FormField__helptext">
            { helptext }
          </span>
        }

        { error &&
          <span className="FormField__error">
            { error }
          </span>
        }

        <style jsx>{styles}</style>
      </label>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    registerField: (name, fieldType) => {
      dispatch({
        type: REGISTER_REQUIRED_FIELD,
        name,
        fieldType
      });
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(FormField);
