import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';
import Wrapper from '../Wrapper';
import styles from './styles.js';

const Header = ({ logout }) => (
  <aside className="Header">
    <Wrapper>
      <div className="Header__wrapper">
        <Link
          to="/"
          className="Header__logo-link"
        >
          <img
            alt="logo"
            className="Header__logo"
            src={logo}
          />
        </Link>

        <ul className="Header__nav">
          <li className="Header__nav-item">
            <Link
              to="/"
              className="Header__nav-link"
            >
              Home
            </Link>
          </li>
          <li className="Header__nav-item">
            <Link
              to="/users"
              className="Header__nav-link"
            >
              Users
            </Link>
          </li>
          <li className="Header__nav-item">
            <a
              className="Header__nav-link"
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
      </div>
    </Wrapper>
    <style jsx>{ styles }</style>
  </aside>
);

export default Header;
