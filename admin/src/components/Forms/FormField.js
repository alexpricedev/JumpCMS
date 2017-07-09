import React from 'react';
import classNames from 'classnames'

import {
  white,
  black,
  darkgreen
} from '../../constants/styles';

const FormField = (props) => {
  const {
    defaultValue,
    error,
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
  } = props;

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

      <style jsx>{`
        .FormField {
          display: block;
        }

        :global(.FormField:not(:last-of-type)) {
          margin: 0 0 20px;
        }

        .FormField__text {
          color: ${black()};
          display: block;
          margin: 0 0 10px;
        }

        .FormField__required {
          font-size: 12px;
          opacity: 0.5;
          padding: 0 0 0 6px;
        }

        .FormField__input {
          background: ${white()};
          border-radius: 3px;
          border: 2px solid ${black(0.2)};
          display: block;
          font-size: 16px;
          opacity: 0.5;
          padding: 16px;
          transition: all 0.3s ease;
          width: 100%;
        }

        .FormField__input:hover,
        .FormField__input:focus {
          border-color: ${darkgreen(0.6)};
          opacity: 1;
        }

        .FormField__input:focus {
          background: ${darkgreen(0.1)};
        }

        .FormField__input--small {
          max-width: 400px;
        }

        .FormField__helptext {
          display: block;
          font-size: 14px;
          line-height: 16px;
          opacity: 0.4;
          padding: 7px 0 0;
        }
      `}</style>
    </label>
  );
};

export default FormField;
