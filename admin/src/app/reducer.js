import update from 'immutability-helper';

import {
  APP_LOADING,
  SET_PAGES,
  UPDATE_PAGE,
  UPDATE_USER,
} from './constants';

const initalState = {
  loading: true,
  pages: [],
  user: null,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case APP_LOADING:
      return Object.assign({}, state, {
        loading: action.state,
      });

    case UPDATE_USER:
      return Object.assign({}, state, {
        user: action.user,
      });

    case SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      });

    case UPDATE_PAGE:
      const { page } = action;
      const { pages } = state;

      // Find the index of the old page
      const pageIndex = pages.findIndex(
        p => p.slug === page.slug
      );

      // Update the pages state
      const newPages = update(
        pages,
        { $splice: [[pageIndex, 0, page]] }
      );

      return Object.assign({}, state, {
        pages: newPages
      });

    default:
      return state;
  }
};

export default reducer;
