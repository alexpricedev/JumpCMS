import React from 'react';
import classNames from 'classnames'

import {
  white,
  black,
  grey
} from '../../constants/styles';

const FormTextarea = (props) => {
  const {
    error,
    helptext,
    label,
    name,
    onChange,
    placeholder,
    value,
  } = props;

  const labelCls = classNames([
    'form-label',
    {
      'form-label--error': error,
    },
  ]);

  const inputCls = classNames([
    'form-label__textarea',
    {
      'form-label__textarea--error': error,
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

      <textarea
        name={name}
        id={name}
        value={value}
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

        .form-label__textarea {
          background: ${white()};
          border-radius: 3px;
          border: 2px solid ${black(0.2)};
          display: block;
          font-size: 16px;
          min-height: 100px;
          opacity: 0.5;
          padding: 16px;
          resize: vertical;
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

export default FormTextarea;
