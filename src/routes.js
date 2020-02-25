import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import RegistrarPonto from './pages/registrarPonto';
import ListarPontos from './pages/listarPontos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/registrar-ponto" component={RegistrarPonto} />
      <Route path="/listar-pontos" component={ListarPontos} />
    </Switch>
  );
}
