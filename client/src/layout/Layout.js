import React from 'react';
import { connect } from 'react-redux';

import logout from '../app/actions/logout';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

const Layout = ({ app, logout, children }) => (
  <div>
    <Header logout={logout} />
    <Wrapper>
      <main>
        { children }
      </main>
    </Wrapper>
    <style jsx>{`
      main {
        margin-top: 70px;
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
