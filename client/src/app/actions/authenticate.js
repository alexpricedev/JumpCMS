import { push } from 'react-router-redux';

import feathers from '../../feathers-client';

import {
  UPDATE_USER
} from '../App-constants';

const authenticate = function(user) {
  return (dispatch, getState) => {

    // If there is a user, add the feathers
    // auth strategy to it
    user = user ?
      Object.assign({}, user, { strategy: 'local' }) :
      user;

    // Authenticate the user. If no user is supplied
    // feathers will check for a JWT in local storage
    feathers.authenticate(user)
      .then(response => feathers.passport.verifyJWT(response.accessToken))
      .then(payload => feathers.service('users').get(payload.userId))
      .then(user => {
        dispatch({ type: UPDATE_USER, user });
        dispatch(push('/'));
        feathers.set('user', user);
      })
      .catch(error => {

        // If there the user is not authenticated
        // redirect them to the login view
        dispatch(push('/login'));
      });
  };
};

export default authenticate;
