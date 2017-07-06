import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authenticate from './actions/authenticate';
import './reset.css';

// App routes
import Dashboard from '../dashboard/Dashboard';
import Pages from '../pages/Pages';
import Posts from '../posts/Posts';
import Users from '../users/Users';
import Login from '../login/Login';

export class App extends Component {
  componentDidMount() {

    // Setup session based on JWT or redirect
    this.props.authenticate();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} key="home" />
        <Route exact path="/pages" component={Pages} key="pages" />
        <Route exact path="/posts" component={Posts} key="posts" />
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

          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .fade-in {
            animation: fade-in 1s ease;
          }
        `}</style>
      </div>
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
