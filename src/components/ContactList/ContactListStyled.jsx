import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid #34b8e9;
  box-shadow: 13px 19px 32px -9px rgba(42, 66, 21, 07);
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Text = styled.p`
  width: 35%;
  border-right: 1px solid #34b8e9;
`;

export const Button = styled.button`
  width: 120px;
  color: #ffffff;
  background-color: #b76677;
  border: #b76677;

  padding: 8px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #e90b0b;
  }
`;
