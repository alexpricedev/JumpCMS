import update from 'immutability-helper';

import {
  PAGE_SAVING,
  REGISTER_REQUIRED_FIELD,
  SET_CURRENT_PAGE,
  SET_PAGE_ERRORS,
  UPDATE_CURRENT_PAGE,
  UPDATE_CURRENT_PAGE_DATA,
} from './constants';

const initalState = {
  currentPage: null,
  errors: null,
  pageSaving: false,
  requiredFields: [],
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_CURRENT_PAGE_DATA:
      const page = { ...state.currentPage };
      page[action.group][action.key] = action.value;
      return { ...state, currentPage: page };

    case REGISTER_REQUIRED_FIELD:
      const field = {
        name: action.name,
        type: action.fieldType
      };

      const requiredFields = update(
        state.requiredFields,
        { $push: [field] }
      );

      return { ...state, requiredFields };

    case SET_PAGE_ERRORS:
      return { ...state, errors: action.errors };

    case UPDATE_CURRENT_PAGE:
      return { ...state, currentPage: action.page };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
        requiredFields: [] // reset for new page
      };

    case PAGE_SAVING:
      return { ...state, pageSaving: action.state };

    default:
      return state;
  }
};

export default reducer;
