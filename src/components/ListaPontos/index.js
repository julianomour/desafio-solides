import React from 'react';

import { ListPontos } from './styles';

const ListaPontos = () => (
  <ListPontos>
    <h1>
      Olá <strong>Fulano</strong>
    </h1>
    <h2>Pontos registrados hoje:</h2>
    <ul>
      <li>
        <strong>Início de Jornada</strong>
        <br />
        <span>10:00</span>
      </li>
      <li>
        <strong>Início de intervalo</strong>
        <br />
        <span>--:--</span>
      </li>
      <li>
        <strong>Fim de intervalo</strong>
        <br />
        <span>--:--</span>
      </li>
      <li>
        <strong>Fim de Jornada</strong>
        <br />
        <span>--:--</span>
      </li>
    </ul>
  </ListPontos>
);

export default ListaPontos;
