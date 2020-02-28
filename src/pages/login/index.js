import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import api from '../../services/api';

import {
  Container,
  FormLogin,
  SubmitButtn,
  RegisterButton,
  DivLogin
} from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
    err: false,
    msg: ''
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      err: false
    });
  };

  login = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await api.post('/sessions', { email, password });
      await sessionStorage.setItem('token', response.data.token);
      await sessionStorage.setItem('name', response.data.user.name);
      this.props.history.push('/registrar-ponto');
    } catch (error) {
      const { response } = error;
      this.setState({
        err: true,
        msg: response.data.error
      });
    }
  };

  register = async e => {
    e.preventDefault();
    this.props.history.push('/register');
  };

  handleEmailChange = async e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = async e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    const { email, password, err, msg } = this.state;
    return (
      <Container>
        <DivLogin>
          <div>
            <h1>Registro de ponto</h1>
            <h2>Login</h2>
          </div>
          <FormLogin onSubmit={this.login}>
            <input
              type="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={this.handleEmailChange}
            />
            <input
              type="password"
              placeholder="************"
              value={password}
              onChange={this.handlePasswordChange}
            />
            <div>
              <SubmitButtn>Entrar</SubmitButtn>
              <RegisterButton onClick={this.register}>Registrar</RegisterButton>
            </div>
          </FormLogin>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            open={err}
            autoHideDuration={3000}
          >
            <Alert onClose={this.handleClose} severity="error">
              {msg}
            </Alert>
          </Snackbar>
        </DivLogin>
      </Container>
    );
  }
}

export default Login;
