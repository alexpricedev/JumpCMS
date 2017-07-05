import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './app/App-reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  app: appReducer
});

export default rootReducer;
