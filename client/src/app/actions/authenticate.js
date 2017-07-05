import { push } from 'react-router-redux';

import feathers from '../../feathers-client';
import {
  UPDATE_USER
} from '../constants';

const authenticate = function(userDetails) {
  return (dispatch, getState) => {

    // If there is a user, add the feathers
    // auth strategy to it
    userDetails = userDetails ?
      Object.assign({}, userDetails, { strategy: 'local' }) :
      userDetails;

    // Authenticate the user. If no user is supplied
    // feathers will check for a JWT in local storage
    feathers.authenticate(userDetails)
      .then(response => feathers.passport.verifyJWT(response.accessToken))
      .then(payload => feathers.service('users').get(payload.userId))
      .then(user => {
        dispatch({ type: UPDATE_USER, user });
        feathers.set('user', user);

        // If a user is loggin in then redirect
        // them to the index
        if (userDetails) {
          dispatch(push('/'));
        }
      })
      .catch(error => {

        // If there the user is not authenticated
        // redirect them to the login view
        dispatch(push('/login'));
      });
  };
};

export default authenticate;
