import { UPDATE_PAGE } from '../../app/constants';
import {
  PAGE_SAVING,
  UPDATE_CURRENT_PAGE,
  SET_PAGE_ERRORS,
} from '../constants';

import validateFields from '../../helpers/validate-fields';
import pages from '../../app/services/pages';

const updatePage = function() {
  return (dispatch, getState) => {
    const { currentPage, requiredFields } = getState().pages;

    // Reset any errors
    dispatch({ type: SET_PAGE_ERRORS, errors: null });

    // Validate the form fields
    const errors = validateFields(
      requiredFields,
      currentPage.content
    );

    // errors is a `Map`
    if (errors.size > 0) {
      dispatch({ type: SET_PAGE_ERRORS, errors });
      return;
    }

    dispatch({ type: PAGE_SAVING, state: true });

    pages
      .patch(
        currentPage._id,
        {
          content: currentPage.content,
          meta: currentPage.meta
        }
      )
      .then(page => {
        dispatch({ type: UPDATE_PAGE, page });
        dispatch({ type: UPDATE_CURRENT_PAGE, page });
      })
      .catch(error => {
        console.log('SAVE ERROR:', error);
      })
      .then(() => {
        dispatch({ type: PAGE_SAVING, state: false });
      });
  };
};

export default updatePage;
