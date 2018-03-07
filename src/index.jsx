import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers/index';
import App from './components/App';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
