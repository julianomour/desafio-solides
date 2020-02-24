import styled from 'styled-components';
import office from '../../assets/img/office.jpg';

export const Container = styled.div`
  display: flex;
`;

export const ImgLogin = styled.div`
  flex: 2;
  background: url(${office}) center;
  height: 100vh;
  opacity: 0.6;
  order: 2;
`;

export const DivLogin = styled.div`
  flex: 1;
  order: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  input {
    flex: 1;
    border: solid 1px #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
  > input {
    margin-top: 10px;
  }
  div {
    align-items: flex-end;
  }
`;

export const SubmitButtn = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #27ae60;
  margin-right: 5px;
`;

export const RegisterButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #2980b9;
`;
