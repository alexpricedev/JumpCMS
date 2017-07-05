import React from 'react';
import ReactDOM from 'react-dom';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import registerServiceWorker from './register-service-worker';
import rootReducer from './root-reducer';
import App from './app/App';
import Login from './login/Login';
import './index.css';

const history = createHistory();
const middleware = [
  ReduxThunk,
  logger,
  routerMiddleware(history)
];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/login" component={Login}/>
    </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
