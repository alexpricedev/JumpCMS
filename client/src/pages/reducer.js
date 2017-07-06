import {
  UPDATE_PAGES,
  UPDATE_LOADING,
  FETCHED_PAGES,
  SAVING_CHANGES
} from './constants';

const initalState = {
  loading: true,
  fetched: false,
  saving: false,
  pages: [],
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      });

    case UPDATE_LOADING:
      return Object.assign({}, state, {
        loading: action.state,
      });

    case FETCHED_PAGES:
      return Object.assign({}, state, {
        fetched: true
      });

    case SAVING_CHANGES:
      return Object.assign({}, state, {
        saving: action.state
      });

    default:
      return state;
  }
};

export default reducer;
