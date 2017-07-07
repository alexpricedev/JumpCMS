import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './app/reducer';
import pagesReducer from './pages/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  app: appReducer,
  pages: pagesReducer
});

export default rootReducer;
