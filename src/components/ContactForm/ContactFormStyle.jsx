import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  width: 400px;
  /* background-color: #e2e2e2; */
  /* border: 1px solid black; */
  margin-right: auto;
  margin-left: auto;
  /* margin-bottom: 20px; */
  padding: 20px;
`;

export const Label = styled.label`
  font-size: 25px;
  /* align-items: center; */
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 350px;
  height: 20px;
  padding: 5px;
  margin-bottom: 15px;
`;
export const Button = styled.button`
  width: 150px;
  background-color: #1cedd5;
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
