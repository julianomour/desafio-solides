import styled from 'styled-components';

export const Container = styled.div`
  background: #192a56;
  padding: 10px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    align-items: center;
    li {
      padding: 0 10px;
      font-weight: bold;
      font-size: 14px;
      text-transform: uppercase;
      a {
        color: #fff;
        text-decoration: none;
      }
      svg {
        color: #fff;
      }
    }
  }
`;
