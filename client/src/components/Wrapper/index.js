import React from 'react';

const Wrapper = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 1200px;
      }
    `}</style>
  </div>
);

export default Wrapper;
