import React, { Component } from 'react';
import { format, parseISO } from 'date-fns';
import { MdLocalDining, MdComputer, MdHome } from 'react-icons/md';
import api from '../../services/api';
import Header from '../../components/Header';

import { Container, List } from './styles';

class registrarPonto extends Component {
  state = {
    name: '',
    schedules: []
  };

  async componentDidMount() {
    await this.setState({
      token: sessionStorage.getItem('token'),
      name: sessionStorage.getItem('name')
    });
    const { token, schedules } = this.state;

    const schedule = await api.get('/schedules', {
      headers: { Authorization: `Bearer ${token}` }
    });

    await this.setState({
      schedules: [...schedules, ...schedule.data]
    });
  }

  // eslint-disable-next-line class-methods-use-this
  formatDate(date) {
    return format(parseISO(date), "dd/MM/yyyy' - 'HH:mm:ss");
  }

  render() {
    const { schedules, name } = this.state;
    return (
      <>
        <Header />
        <Container>
          <h1>Olá {name}</h1>

          {schedules.length > 0 ? (
            <h2>Estes são os seus pontos registrados</h2>
          ) : (
            <h2>Você ainda não possui registros</h2>
          )}

          <List>
            {schedules.map(s => (
              <li>
                <span className="date">
                  {s.createdAt
                    ? format(parseISO(s.createdAt), 'dd-MM-yyyy')
                    : ''}
                </span>
                <span>
                  <MdComputer size={22} />
                  {s.start_day ? format(parseISO(s.start_day), 'HH:mm:ss') : ''}
                </span>
                <span>
                  <MdLocalDining size={22} />
                  {s.start_lunch
                    ? format(parseISO(s.start_lunch), 'HH:mm:ss')
                    : ''}
                </span>
                <span>
                  <MdComputer size={22} />
                  {s.end_lunch ? format(parseISO(s.end_lunch), 'HH:mm:ss') : ''}
                </span>
                <span>
                  <MdHome size={22} />
                  {s.end_day ? format(parseISO(s.end_day), 'HH:mm:ss') : ''}
                </span>
              </li>
            ))}
          </List>
        </Container>
      </>
    );
  }
}
export default registrarPonto;
