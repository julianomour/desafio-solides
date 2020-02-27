import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
  @media (max-width: 650px) {
    height: auto;
    margin-top: 50px;
  }
`;

export const Header = styled.div`
  background: #332e74;
  color: #fff;
  width: 600px;
  text-align: center;
  padding: 20px;
  margin: 10px;
  border-radius: 4px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style: none;
  width: 620px;

  li {
    color: #192a56;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #eee;
    background: #fff;
    margin: 10px 0;
    span {
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    span.date {
      color: #fff;
      background: #192a56;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
    padding: 15px;
    li {
      flex-direction: column;
      margin-bottom: 20px;
      span {
        border-bottom: solid 1px;
      }
    }
  }
`;
