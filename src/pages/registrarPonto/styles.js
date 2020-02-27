import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 900px) {
    margin-top: 35px;
    display: block;
  }
  @media (max-width: 650px) {
    margin-top: 35px;
    display: block;
  }
`;

export const RegistrarPonto = styled.div`
  background: #fff;
  color: #192a56;
  padding: 20px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  strong {
    font-size: 30px;
  }

  @media (max-width: 650px) {
    width: 100%;
    margin-top: 0px;
  }
`;
export const RegistrarButton = styled.button.attrs({
  type: 'submit'
})`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #192a56;
  margin-right: 5px;
`;

export const Pontos = styled.div`
  padding: 20px;
  border-radius: 0 0 5px 5px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  list-style: none;
  width: 500px;
  li {
    display: flex;
    flex-direction: row;
    padding: 20px;
    border-bottom: solid 1px;
    justify-content: space-between;
    span {
      width: 150px;
      display: flex;
      font-weight: bold;
      align-items: center;
      text-align: center;
    }
    svg {
      margin-right: 5px;
    }
  }
  @media (max-width: 650px) {
    width: 100%;
    padding: 0;
    li {
      flex-direction: column;
      padding: 10px;
      span {
        width: auto;
        flex-direction: column;
        margin-bottom: 10px;
      }
      svg {
        margin-bottom: 10px;
      }
    }
  }
`;
