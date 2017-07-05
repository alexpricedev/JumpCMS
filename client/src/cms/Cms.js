import React from 'react';
import { connect } from 'react-redux';

import logout from '../app/actions/logout';
import Sidebar from '../components/Sidebar';
import './Cms.css';

const Cms = ({ app, logout, children }) => (
  <div className="Cms">
    <Sidebar logout={logout} />
    <main className="Cms__main">
      { children }
    </main>
  </div>
);

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cms);
