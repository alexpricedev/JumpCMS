import React from 'react';

const LayoutBody = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        background: white;
        border-radius: 3px;
        padding: 20px;
      }
    `}</style>
  </div>
);


export default LayoutBody;
