import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #332e74;
`;

export const FormLogin = styled.form`
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
