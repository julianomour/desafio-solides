import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormLogin = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  input {
    flex: 1;
    border: solid 1px #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
  }

  > input {
    margin-top: 10px;
  }
`;

export const SubmitButtn = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #27ae60;
`;
