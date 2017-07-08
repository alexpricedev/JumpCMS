import React from 'react';

import { maxWidth } from '../../constants/styles';

const Wrapper = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: ${maxWidth};
      }

      @media (max-width: ${maxWidth}) {
        div {
          padding: 0 20px;
        }
      }
    `}</style>
  </div>
);

export default Wrapper;
