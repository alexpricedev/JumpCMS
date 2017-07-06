import React from 'react';
import { Link } from 'react-router-dom';

import Layout, { LayoutTitle } from '../components/Layout';

const Pages = () => (
  <Layout>
    <LayoutTitle>Your Pages</LayoutTitle>

    <ul>
      <li>
        <Link
          className="Pages__link"
          title="Edit your home page"
          to="/pages/home"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="Pages__link"
          title="Edit your about us page"
          to="/pages/about-us"
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          className="Pages__link"
          title="Edit your contact page"
          to="/pages/contact"
        >
          Contact
        </Link>
      </li>
    </ul>

    <style jsx>{`
      :global(.Pages__link) {
        background: white;
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


export default Pages;
