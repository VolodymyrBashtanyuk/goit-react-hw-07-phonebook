import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: 20px;

  background-color: #36ada5;
  border-bottom: 1px solid black;
  /* margin-bottom: 20px; */
`;

export const Item = styled.li`
  font-size: 20px;
  :not(:last-child) {
    margin-right: 40px;
  }
  :hover {
    color: #92ff01;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Main = styled.main`
  background-color: #b3e6ed;
  min-height: 100vh;
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #36ada5;
  border-bottom: 1px solid black;
`;
