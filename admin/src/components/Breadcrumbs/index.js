import React from 'react';
import { Link } from 'react-router-dom';

import { green } from '../../constants/styles';

const Breadcrumbs = ({ children }) => (
  <ul>
    { children }

    <style jsx>{`
      ul {
        margin: 0 0 20px;
        opacity: 0.5;
      }
    `}</style>
  </ul>
);

const Breadcrumb = ({ to, title }) => (
  <li>
    { to ?
      <span className="Breadcrumb__link-wrapper">
        <Link
          className="Breadcrumb__link"
          title={`Go to ${title}`}
          to={to}
        >
          { title }
        </Link>
      </span> :
      <span>{ title }</span>
    }

    <style jsx>{`
      li {
        display: inline-block;
        margin: 0 10px 0 0;
      }

      span {
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      :global(.Breadcrumb__link) {
        border-bottom: 2px solid transparent;
        color: ${green()};
        text-decoration: none;
      }

      :global(.Breadcrumb__link:hover) {
        border-bottom-color: ${green()};
      }

      .Breadcrumb__link-wrapper::after {
        content: '»';
        left: 5px;
        position: relative;
      }
    `}</style>
  </li>
);

export {
  Breadcrumbs,
  Breadcrumb
};
