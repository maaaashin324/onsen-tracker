import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'babel-polyfill';

import reducers from './reducers/index';

import Footer from './components/Footer';
import List from './containers/List';
import MyNavbar from './components/MyNavbar';
import Nomatch from './components/Nomatch';
import Register from './containers/Register';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/register" component={Register} />
          <Route component={Nomatch} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
