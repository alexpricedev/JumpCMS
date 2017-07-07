import { UPDATE_PAGE } from '../../app/constants';
import { PAGE_SAVING } from '../constants';

import pages from '../../app/services/pages';

const updatePage = function(pageId, newData) {
  return (dispatch) => {
    dispatch({ type: PAGE_SAVING, state: true });

    pages
      .patch(pageId, newData)
      .then((res) => {
        dispatch({ type: UPDATE_PAGE, page: res });
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
