import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import authenticate from './actions/authenticate';
import './reset.css';
import './App.css';

// App routes
import Home from '../home/Home';
import Users from '../users/Users';
import Login from '../login/Login';

export class App extends Component {
  componentDidMount() {

    // Setup session based on JWT or redirect
    // to /login
    this.props.authenticate();
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
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
