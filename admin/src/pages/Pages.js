import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout, {
  LayoutTitle
} from '../components/Layout';
import { white } from '../constants/styles';

const Pages = ({ pages }) => (
  <Layout>
    <LayoutTitle>Your Pages</LayoutTitle>

    <ul>
      { pages.map(page => (
          <li key={page._id}>
            <Link
              className="Pages__link"
              title={`Edit your ${page.title} page`}
              to={`/pages/${page.slug}`}
            >
              { page.title }
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
        transition: all 0.3s ease;
      }

      :global(.Pages__link:hover) {
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
      }
    `}</style>
  </Layout>
);

export default connect(
  state => state.app
)(Pages);
