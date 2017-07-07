import {
  SET_PAGES,
  APP_LOADING,
} from '../constants';

import pages from '../services/pages';

const fetchPages = function(userDetails) {
  return (dispatch) => {
    pages
      .find({ rx: false }) // disable reactive fetches
      .then(res => {
        dispatch({ type: SET_PAGES, pages: res.data });
        dispatch({ type: APP_LOADING, state: false });
      });
  };
};

export default fetchPages;
