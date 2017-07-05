import React, { Component } from 'react';

import feathers from '../feathers-client'
import './Users.css';

const service = feathers.service('users');

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };

    this.subscribe = this.subscribe.bind(this);
  }

  componentWillMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    if (this.state.subscriber) {
      this.state.subscriber.unsubscribe();
    }
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
      <div className="Users">
        <h2>Users:</h2>

        <ul>
          { users.map((user, i) => (
              <li key={i}>
                { user.email }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Users;
