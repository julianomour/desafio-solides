import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Container, Header, ListPontos } from './styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
];

const registrarPonto = () => (
  <Container>
    <Header>
      <h1>
        Olá <strong>Fulano</strong>
      </h1>

      <div>
        <h2>Pontos registrados</h2>
      </div>
    </Header>
    <ListPontos>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Início de Jornada</TableCell>
              <TableCell align="center">Início de Intervalo</TableCell>
              <TableCell align="center">Fim de Intervalo</TableCell>
              <TableCell align="center">Fim de Jornada</TableCell>
              <TableCell align="center">data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell align="center">9:05</TableCell>
                <TableCell align="center">12:12</TableCell>
                <TableCell align="center">13:12</TableCell>
                <TableCell align="center">18:05</TableCell>
                <TableCell align="center">23/02/2020</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ListPontos>
  </Container>
);

export default registrarPonto;
