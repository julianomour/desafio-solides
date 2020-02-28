/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, FormLogin, SubmitButtn } from './styles';

export default class Register extends Component {
  state = {
    name: '',
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

  handleNameChange = async e => {
    this.setState({
      name: e.target.value
    });
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

  register = async e => {
    e.preventDefault();

    try {
      const { name, email, password } = this.state;
      const response = await api.post('/users', { name, email, password });
      await sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('name', response.data.user.name);
      this.props.history.push('/registrar-ponto');
    } catch (error) {
      const { response } = error;
      this.setState({
        err: true,
        msg: response.data.error
      });
    }
  };

  render() {
    const { name, email, password, err, msg } = this.state;
    return (
      <Container>
        <div>
          <h1>Realizar Cadastro</h1>
        </div>
        <FormLogin onSubmit={this.register}>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={this.handleNameChange}
          />
          <input
            type="email"
            placeholder="exemplo@email.com"
            value={email}
            onChange={this.handleEmailChange}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={this.handlePasswordChange}
          />
          <SubmitButtn>Registrar</SubmitButtn>
          <Link to="/">Voltar</Link>
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
      </Container>
    );
  }
}
