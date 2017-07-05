import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import authenticate from './actions/authenticate';
import './reset.css';

// App routes
import Home from '../home/Home';
import Users from '../users/Users';
import Login from '../login/Login';

export class App extends Component {
  componentDidMount() {

    // Setup session based on JWT or redirect
    this.props.authenticate();
  }

  render() {
    return (
      <CSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        <Route exact path="/" component={Home} key="home" />
        <Route exact path="/users" component={Users} key="users" />
        <Route exact path="/login" component={Login} key="login" />

        <style jsx global>{`
          html {
            box-sizing: border-box;
            font-family: sans-serif;
          }

          body {
            background: #fcfcfc;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          .fade-enter {
            opacity: 0;
            z-index: 1;
          }

          .fade-enter.fade-enter-active {
            opacity: 1;
            transition: opacity 250ms ease-in;
          }
        `}</style>
      </CSSTransitionGroup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => {
      dispatch(authenticate());
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
