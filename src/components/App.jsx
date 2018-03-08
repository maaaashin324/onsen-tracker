import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import List from './List';
import MyNavbar from './MyNavbar';
import Nomatch from './Nomatch';
import Register from './Register';

const App = () => (
  <div className="App">
    <MyNavbar />
    <Switch>
      <Route exact path="/" component={List} />
      <Route path="/register" component={Register} />
      <Route component={Nomatch} />
    </Switch>
    <Footer />
  </div>
);

export default App;
