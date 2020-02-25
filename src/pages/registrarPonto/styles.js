import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
`;

export const RegistrarPonto = styled.div`
  background: #332e74;
  padding: 20px;
  border-radius: 5px 5px 0px 0px;
  width: 300px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    font-size: 30px;
  }
`;
export const RegistrarButton = styled.button.attrs({
  type: 'submit'
})`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #27ae60;
  margin-right: 5px;
`;

export const Pontos = styled.div`
  padding: 20px;
  border-radius: 0 0 5px 5px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 300px;
  li {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: solid 1px;
    border-bottom: solid 1px;
    justify-content: space-between;
    span {
      display: flex;
      font-weight: bold;
      align-items: center;
    }
    svg {
      margin-right: 5px;
    }
  }
`;
