import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { Home, Login, Register } from '../pages';


const Navigation = () => {

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  )
}

export default Navigation;
