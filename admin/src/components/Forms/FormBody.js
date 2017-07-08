import React from 'react';

import { medium } from '../../constants/styles';

const FormBody = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      @media (min-width: ${medium}) {
        div {
          flex: 1 0;
        }
      }
    `}</style>
  </div>
);

export default FormBody;
