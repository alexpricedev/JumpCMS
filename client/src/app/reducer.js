import {
  UPDATE_USER,
  UPDATE_LOADING
} from './constants';

const initalState = {
  user: null,
  loading: true
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    case UPDATE_LOADING:
      return Object.assign({}, state, {
        loading: action.state,
      });

    default:
      return state;
  }
};

export default reducer;
