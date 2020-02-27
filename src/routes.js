import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RegistrarPonto from './pages/registrarPonto';
import ListarPontos from './pages/listarPontos';
import isAuthentucated from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthentucated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/registrar-ponto" component={RegistrarPonto} />
      <PrivateRoute path="/listar-pontos" component={ListarPontos} />
    </Switch>
  );
};

export default Routes;
