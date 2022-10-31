import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;

  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 350px;
  height: 20px;
  padding: 10px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  width: 100px;
  background-color: #3ca9ba;
  border: transparent;
  margin-right: auto;
  margin-left: auto;
  padding: 10px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #4f94f3;
  }
`;
