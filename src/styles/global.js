import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body{
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    background: #273c75;
  }

  body, input, button {
    font: 14px Roboto sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
