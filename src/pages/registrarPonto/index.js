import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { MdLocalDining, MdComputer, MdHome } from 'react-icons/md';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import api from '../../services/api';
import { Container, RegistrarPonto, RegistrarButton, Pontos } from './styles';

import Header from '../../components/Header';

export default class registrarPonto extends Component {
  state = {
    name: '',
    start_day: '',
    start_lunch: '',
    end_lunch: '',
    end_day: '',
    token: '',
    msg: '',
    err: false
  };

  async componentDidMount() {
    await this.setState({
      token: sessionStorage.getItem('token'),
      name: localStorage.getItem('name')
    });

    const { token } = this.state;

    const schedule = await api.get('/today', {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (schedule.data) {
      this.setState({
        start_day: schedule.data.start_day,
        start_lunch: schedule.data.start_lunch,
        end_lunch: schedule.data.end_lunch,
        end_day: schedule.data.end_day
      });
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      err: false
    });
  };

  startDay = async () => {
    const { token } = this.state;

    try {
      const response = await api.get('/start_day', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.setState({
        start_day: response.data.hour
      });
    } catch (error) {
      this.setState({
        err: true,
        msg: 'Não foi Possível registrar o ponto'
      });
    }
  };

  startLunch = async () => {
    const { token } = this.state;

    try {
      const response = await api.get('/start_lunch', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.setState({
        start_lunch: response.data.hour
      });
    } catch (error) {
      this.setState({
        err: true,
        msg: 'Não foi Possível registrar o ponto'
      });
    }
  };

  endLunch = async () => {
    const { token } = this.state;

    try {
      const response = await api.get('/end_lunch', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.setState({
        end_lunch: response.data.hour
      });
    } catch (error) {
      this.setState({
        err: true,
        msg: 'Não foi Possível registrar o ponto'
      });
    }
  };

  endDay = async () => {
    const { token } = this.state;
    try {
      const response = await api.get('/end_day', {
        headers: { Authorization: `Bearer ${token}` }
      });
      this.setState({
        end_day: response.data.hour
      });
    } catch (error) {
      this.setState({
        err: true,
        msg: 'Não foi Possível registrar o ponto'
      });
    }
  };

  render() {
    const {
      start_day,
      start_lunch,
      end_lunch,
      end_day,
      msg,
      err,
      name
    } = this.state;
    return (
      <>
        <Header />
        <Container>
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
          <RegistrarPonto>
            <h2>Olá {name}</h2>
            <strong>
              <Clock format="HH:mm:ss" ticking timezone="America/Sao_Paulo" />
            </strong>
            <Pontos>
              <li>
                <span>
                  <MdComputer size={22} /> Início de Jornada
                </span>
                <span>{start_day}</span>

                <RegistrarButton onClick={this.startDay}>
                  Registrar
                </RegistrarButton>
              </li>
              <li>
                <span>
                  <MdLocalDining size={22} /> Intervalo
                </span>
                <span>{start_lunch}</span>

                <RegistrarButton onClick={this.startLunch}>
                  Registrar
                </RegistrarButton>
              </li>
              <li>
                <span>
                  <MdComputer size={22} /> Volta do Intervalo
                </span>
                <span>{end_lunch}</span>

                <RegistrarButton onClick={this.endLunch}>
                  Registrar
                </RegistrarButton>
              </li>
              <li>
                <span>
                  <MdHome size={22} /> Fim de Jornada
                </span>
                <span>{end_day}</span>

                <RegistrarButton onClick={this.endDay}>
                  Registrar
                </RegistrarButton>
              </li>
            </Pontos>
          </RegistrarPonto>
        </Container>
      </>
    );
  }
}
