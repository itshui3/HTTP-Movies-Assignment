import React from 'react';
import ReactDOM from 'react-dom';
//Redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/reducers/'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, logger)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
