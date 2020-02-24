import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}
