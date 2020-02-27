import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MdWatchLater } from 'react-icons/md';
import { Container } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <ul>
          <li>
            <Link to="/registrar-ponto">Registrar Ponto</Link>
          </li>
          <li>
            <MdWatchLater size={42} />
          </li>
          <li>
            <Link to="/listar-pontos">Listar Pontos</Link>
          </li>
        </ul>
      </Container>
    );
  }
}

export default Header;
