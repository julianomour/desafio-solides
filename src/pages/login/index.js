import React from 'react';

import {
  Container,
  FormLogin,
  ImgLogin,
  SubmitButtn,
  RegisterButton,
  DivLogin
} from './styles';

const login = () => (
  <Container>
    <ImgLogin />
    <DivLogin>
      <div>
        <h1>Registro de ponto</h1>
        <h2>Login</h2>
      </div>
      <FormLogin>
        <input type="email" placeholder="exemplo@email.com" />
        <input type="password" placeholder="************" />
        <div>
          <SubmitButtn>Entrar</SubmitButtn>
          <RegisterButton>Registrar</RegisterButton>
        </div>
      </FormLogin>
    </DivLogin>
  </Container>
);

export default login;
