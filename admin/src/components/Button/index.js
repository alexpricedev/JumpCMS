import React from 'react';
import classNames from 'classnames'

import {
  green,
  darkgreen,
  white
} from '../../constants/styles';

const Button = ({ children, block }) => {
  const cls = classNames([
    'button',
    {
      'button--block': block,
    },
  ]);

  return (
    <button className={cls}>
      { children }

      <style jsx>{`
        .button {
          background: ${green()};
          border: 1px solid ${darkgreen()};
          border-radius: 3px;
          color: ${white()};
          display: inline-block;
          font-size: 13px;
          padding: 14px 20px;
          cursor: pointer;
          font-weight: 400;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: background 0.3s ease;
        }

        .button:hover {
          background: ${darkgreen()};
        }

        .button--block {
          display: block;
          width: 100%;
        }
      `}</style>
    </button>
  );
};

export default Button;
