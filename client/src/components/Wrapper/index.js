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
    `}</style>
  </div>
);

export default Wrapper;
