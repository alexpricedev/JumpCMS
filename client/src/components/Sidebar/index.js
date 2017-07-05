import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import './styles.css';

const Sidebar = ({ logout }) => (
  <aside className="Sidebar">
    <img src={logo} className="Sidebar__logo" alt="logo" />
    <h2 className="Sidebar__title">CMS</h2>

    <ul className="Sidebar__nav">
      <li className="Sidebar__nav-item">
        <Link
          to="/"
          className="Sidebar__nav-link"
        >
          Home
        </Link>
      </li>
      <li className="Sidebar__nav-item">
        <Link
          to="/users"
          className="Sidebar__nav-link"
        >
          Users
        </Link>
      </li>
      <li className="Sidebar__nav-item">
        <a
          className="Sidebar__nav-link"
          href="#logout"
          onClick={e => {
            e.preventDefault();
            logout();
          }}
        >
          Logout
        </a>
      </li>
    </ul>

  </aside>
);

export default Sidebar;
