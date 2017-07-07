import React from 'react';
import classNames from 'classnames'

import {
  white,
  black
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
    type,
    value,

    // Modifiers
    small,
  } = props;

  const labelCls = classNames([
    'form-label',
    {
      'form-label--error': error,
    },
  ]);

  const inputCls = classNames([
    'form-label__input',
    {
      'form-label__input--error': error,
      'form-label__input--small': small,
    },
  ]);

  return (
    <label
      className={labelCls}
      htmlFor={name}
    >
      <span className="form-label__text">
        { label }
      </span>

      <input
        name={name}
        id={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        className={inputCls}
      />

      { helptext &&
        <span className="form-label__helptext">
          { helptext }
        </span>
      }

      { error &&
        <span className="form-label__error">
          { error }
        </span>
      }

      <style jsx>{`
        .form-label {
          display: block;
        }

        :global(.form-label:not(:last-of-type)) {
          margin: 0 0 20px;
        }

        .form-label__text {
          color: ${black()};
          display: block;
          margin: 0 0 10px;
        }

        .form-label__input {
          background: ${white()};
          border-radius: 3px;
          border: 2px solid ${black(0.2)};
          display: block;
          font-size: 16px;
          opacity: 0.5;
          padding: 16px;
          transition: opacity 0.3s ease;
          width: 100%;
        }

        .form-label__input:hover,
        .form-label__input:focus {
          opacity: 1;
        }

        .form-label__input--small {
          max-width: 400px;
        }

        .form-label__helptext {
          display: block;
          font-size: 14px;
          opacity: 0.4;
          padding: 10px 0;
        }
      `}</style>
    </label>
  );
};

export default FormField;
