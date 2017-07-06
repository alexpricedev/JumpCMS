import feathers from '../../feathers-client';
import {
  UPDATE_PAGES,
  UPDATE_LOADING,
  FETCHED_PAGES
} from '../constants';

const service = feathers.service('pages');

const fetchPages = function(userDetails) {
  return (dispatch, getState) => {
    const { pages } = getState();

    // If we're already connected there is no
    // need to fetch again
    if (pages.fetched) {
      return;
    }

    dispatch({ type: UPDATE_LOADING, state: true });

    service
      .find()
      .subscribe(res => {
        dispatch({ type: UPDATE_PAGES, pages: res.data });
        dispatch({ type: UPDATE_LOADING, state: false });
        dispatch({ type: FETCHED_PAGES });
      });
  };
};

export default fetchPages;
export { service }
