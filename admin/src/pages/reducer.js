import {
  PAGE_SAVING,
  SET_CURRENT_PAGE,
  UPDATE_CURRENT_PAGE,
} from './constants';

const initalState = {
  currentPage: null,
  pageSaving: false,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case PAGE_SAVING:
      return { ...state, pageSaving: action.state }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page }

    case UPDATE_CURRENT_PAGE:
      const page = { ...state.currentPage };
      page[action.group][action.key] = action.value;
      return { ...state, currentPage: page }

    default:
      return state;
  }
};

export default reducer;
