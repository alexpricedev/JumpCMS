import { push } from 'react-router-redux';

import feathers from '../../feathers-client';
import {
  UPDATE_USER
} from '../constants';

const logout = function() {
  return (dispatch) => {
    feathers.logout();
    dispatch({ type: UPDATE_USER, user: null });
    dispatch(push('/login'));
  };
};

export default logout;
