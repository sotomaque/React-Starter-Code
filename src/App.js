import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './app/containers/Home';
import Login from './app/containers/Login';
import Movies from './app/containers/Movies';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/movies/:id">
          <Movies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
