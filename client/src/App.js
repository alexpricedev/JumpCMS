import React, { Component } from 'react';

import feathers from './feathers-client'
import logo from './logo.svg';
import './App.css';

const service = feathers.service('users');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subscriber: null,
      users: [],
    };

    this.authenticate = this.authenticate.bind(this);
  }

  componentWillMount() {
    this.authenticate();
  }

  componentWillUnmount() {
    if (this.state.subscriber) {
      this.state.subscriber.unsubscribe();
    }
  }

  authenticate(login) {
    const user = login ? {
      strategy: 'local',
      email: 'hi@alexpriceonline.com',
      password: 'password'
    } : undefined;

    // Authenticate the user
    feathers.authenticate(user)
    .then(response => feathers.passport.verifyJWT(response.accessToken))
    .then(payload => feathers.service('users').get(payload.userId))
    .then(user => feathers.set('user', user))
    .then(() => this.subscribe())
    .catch(error => {
      console.error('Error authenticating!', error);
    });
  }

  subscribe() {

    // Subscribe to the users service
    const subscriber = service.find().subscribe(
      (res) => {
        this.setState({ users: res.data })
      }
    );

    this.setState({ subscriber })
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button
            onClick={e => {
              e.preventDefault();
              this.authenticate(true); // use creds
            }}
          >
            Login
          </button>

          <button
            onClick={e => {
              e.preventDefault();
              feathers.logout();
            }}
          >
            Logout
          </button>

          <h2>Users:</h2>

          <ul>
            { users.map((user, i) => (
                <li key={i}>
                  { user.email }
                </li>
              ))
            }
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
