import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authenticate from './actions/authenticate';
import logout from './actions/logout';
import logo from '../images/logo.svg';
import Users from '../users/Users';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    const { app, logout } = this.props;

    if (!app.user) {
      return <div>Loading...</div>;
    }

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="app-intro">
          <button
            onClick={e => {
              e.preventDefault();
              logout();
            }}
          >
            Logout
          </button>

          <Route path="/" component={Users} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => {
      dispatch(authenticate());
    },
    logout: () => {
      dispatch(logout());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
