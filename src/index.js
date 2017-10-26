// THIS DOCUMENT DOES ALL APP CONFIG
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './reducers'

// COMPONENTS
import App from './pages/App.js'

const store = createStore(
  reducers,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)