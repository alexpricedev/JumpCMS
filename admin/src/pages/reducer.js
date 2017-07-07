import {
  PAGE_SAVING
} from './constants';

const initalState = {
  pageSaving: false,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case PAGE_SAVING:
      return Object.assign({}, state, {
        pageSaving: action.state
      });

    default:
      return state;
  }
};

export default reducer;
