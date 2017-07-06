import {
  SAVING_CHANGES
} from '../constants';

import { service } from './fetch-pages';

const updatePage = function(pageId, newData) {
  return (dispatch) => {
    dispatch({ type: SAVING_CHANGES, state: true });

    service
      .patch(pageId, newData)
      .then((res) => {
        console.log('res', res);
      })
      .catch(error => {
        console.log('SAVE ERROR:', error);
      })
      .then(() => {
        dispatch({ type: SAVING_CHANGES, state: false });
      });
  };
};

export default updatePage;
