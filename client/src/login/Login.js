import React from 'react';
import { connect } from 'react-redux';

import authenticate from '../app/actions/authenticate';
import './Login.css';

const Login = ({ authenticate }) => (
  <div className="Login">
    Login
    <form
      onSubmit={e => {
        e.preventDefault();
        authenticate({
          email: e.target.email.value,
          password: e.target.password.value,
        });
      }}
    >
      <input name="email" type="email" /><br />
      <input name="password" type="password" /><br />
      <button>Submit</button>
    </form>
  </div>
);


function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: user => {
      dispatch(authenticate(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
