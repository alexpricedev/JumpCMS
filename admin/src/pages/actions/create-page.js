import { UPDATE_PAGE } from '../../app/constants';
import {
  PAGE_SAVING,
  SET_CURRENT_PAGE,
} from '../constants';

import pages from '../../app/services/pages';

const createPage = function() {
  return (dispatch, getState) => {
    const { currentPage } = getState().pages;

    dispatch({ type: PAGE_SAVING, state: true });

    pages
      .create(currentPage)
      .then(page => {
        dispatch({ type: UPDATE_PAGE, page });
        dispatch({ type: SET_CURRENT_PAGE, page });
      })
      .catch(error => {
        console.log('SAVE ERROR:', error);
      })
      .then(() => {
        dispatch({ type: PAGE_SAVING, state: false });
      });
  };
};

export default createPage;
