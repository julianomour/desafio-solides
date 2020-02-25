import React from 'react';

import { Container, FormLogin, SubmitButtn } from './styles';

const register = () => (
  <Container>
    <div>
      <h1>Realizar Cadastro</h1>
    </div>
    <FormLogin>
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="exemplo@email.com" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirmar Senha" />
      <SubmitButtn>Registrar</SubmitButtn>
    </FormLogin>
  </Container>
);

export default register;
