import React from 'react';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';
import authenticate from '../app/actions/authenticate';
import { FormField } from '../components/Forms';
import Button from '../components/Button';
import { white, black, small } from '../constants/styles';

const Login = ({ authenticate }) => (
  <div>
    <img
      alt="JumpCMS logo"
      src={logo}
    />

    <h1>Admin login</h1>

    <form
      onSubmit={e => {
        e.preventDefault();
        authenticate({
          email: e.target.email.value,
          password: e.target.password.value,
        });
      }}
    >
      <FormField
        name="email"
        label="Email address"
        placeholder="email@example.com"
        type="email"
      />
      <FormField
        name="password"
        label="Password"
        placeholder="SuperSecretPassword123_"
        type="password"
      />
      <br />
      <Button block>Login</Button>
    </form>

    <style jsx>{`
      div {
        background: ${white()};
        border: 1px solid ${black(0.1)};
        border-top: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 0 0 30px;
        text-align: center;
      }

      img {
        height: auto;
        padding: 0 40px;
        width: 50%;
      }

      h1 {
        font-size: 24px;
        margin: 0 0 20px;
      }

      form {
        padding: 0 30px;
        text-align: left;
      }

      @media (min-width: ${small}) {
        div {
          border-radius: 0 0 10px 10px;
        }
      }
    `}</style>
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
