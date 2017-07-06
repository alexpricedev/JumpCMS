import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authenticate from './actions/authenticate';
import { black, grey } from '../constants/styles.js';
import './reset.css';
import './fonts.css';

// App routes
import Dashboard from '../dashboard/Dashboard';
import Pages, { HomePage } from '../pages';
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
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/pages" component={Pages} />
        <Route exact path="/pages/home" component={HomePage} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />

        <style jsx global>{`
          html {
            box-sizing: border-box;
            font-family: sans-serif;
          }

          body {
            background: ${grey()};
            color: ${black()};
            font-family: 'Ubuntu', sans-serif;
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
