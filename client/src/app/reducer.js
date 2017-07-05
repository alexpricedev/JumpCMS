import {
  UPDATE_USER
} from './constants';

const initalState = {
  user: null,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
};

export default reducer;
