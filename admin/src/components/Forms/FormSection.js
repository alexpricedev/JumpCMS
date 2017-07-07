import React from 'react';

import { white, black } from '../../constants/styles';

const FormSection = ({ title, children }) => (
  <section>
    <h3>{ title } Section</h3>
    { children }

    <style jsx>{`
      section {
        background: ${white()};
        border: 1px solid ${black(0.1)};
        border-radius: 3px;
        margin: 0 0 20px;
        padding: 20px;
      }

      h3 {
        color: ${black(0.3)};
        font-size: 14px;
        margin: 0 0 10px;
        padding: 0 0 10px;
        text-transform: uppercase;
      }
    `}</style>
  </section>
);

export default FormSection;
