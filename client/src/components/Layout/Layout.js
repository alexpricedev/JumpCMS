import React from 'react';
import { connect } from 'react-redux';

import logout from '../../app/actions/logout';
import Header from '../Header';
import Wrapper from '../Wrapper';

const Layout = ({ app, logout, children }) => (
  <div>
    <Header logout={logout} />
    <Wrapper>
      <main className="fade-in">
        { children }
      </main>
    </Wrapper>
    <style jsx>{`
      main {
        margin-top: 80px;
        padding: 0 0 30px;
      }
    `}</style>
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
)(Layout);
