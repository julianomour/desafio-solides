import React from 'react';
import Clock from 'react-live-clock';
import { MdLocalDining, MdComputer, MdHome } from 'react-icons/md';

import { Container, RegistrarPonto, RegistrarButton, Pontos } from './styles';

const registrarPonto = () => (
  <Container>
    {/* <ListPontos /> */}
    <RegistrarPonto>
      <h2>Olá Fulano</h2>
      <strong>
        <Clock format="HH:mm:ss" ticking timezone="America/Sao_Paulo" />
      </strong>
      <Pontos>
        <li>
          <span>
            <MdComputer size={22} /> Início de Jornada
          </span>{' '}
          <span>-----</span>
        </li>
        <li>
          <span>
            <MdLocalDining size={22} /> Intervalo
          </span>{' '}
          <span>-----</span>
        </li>
        <li>
          <span>
            <MdComputer size={22} /> Volta do Intervalo
          </span>{' '}
          <span>-----</span>
        </li>
        <li>
          <span>
            <MdHome size={22} /> Fim de Jornada
          </span>{' '}
          <span>-----</span>
        </li>
      </Pontos>
      <RegistrarButton>Registrar</RegistrarButton>
    </RegistrarPonto>
  </Container>
);

export default registrarPonto;
