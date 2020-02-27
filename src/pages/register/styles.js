import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #fff;
`;

export const FormLogin = styled.form`
  color: #192a56;
  background: #fff;
  padding: 20px;
  border-radius: 5px 5px 0px 0px;
  width: 300px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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
    border: solid 1px #192a56;
  }

  > input {
    margin-top: 10px;
  }

  a {
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;

    background: #192a56;
    color: #fff;
    border: solid 1px #192a56;
    text-decoration: none;
  }
`;

export const SubmitButtn = styled.button.attrs({
  type: 'submit'
})`
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;

  color: #192a56;
  background: #fff;
  border: solid 1px #192a56;
`;
