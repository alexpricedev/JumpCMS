import React from 'react';
import { Link } from 'react-router-dom';

import Layout, { LayoutTitle } from '../components/Layout';
import { white } from '../constants/styles';
import templates from './templates';

const Pages = () => (
  <Layout>
    <LayoutTitle>Your Pages</LayoutTitle>

    <ul>
      { Object.keys(templates).map((template, index) => (
          <li key={template}>
            <Link
              className="Pages__link"
              title={`Edit your ${template} page`}
              to={`/pages/${template}`}
            >
              { template }
            </Link>
          </li>
        ))
      }
    </ul>

    <style jsx>{`
      :global(.Pages__link) {
        background: ${white()};
        border: 1px solid rgba(0, 0, 0, 0.05);
        color: inherit;
        display: block;
        margin: 0 0 10px;
        padding: 20px;
        position: relative;
        text-decoration: none;
        text-transform: capitalize;
        transition: all 0.3s ease;
      }

      :global(.Pages__link:hover) {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </Layout>
);

export default Pages;
