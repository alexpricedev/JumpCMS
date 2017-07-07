import React from 'react';

const FormBody = ({ children }) => (
  <div>
    { children }

    <style jsx>{`
      div {
        flex: 1 0;
      }
    `}</style>
  </div>
);

export default FormBody;
