import styled from 'styled-components';

export const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  overflow-y: auto;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: auto;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
  }

  button {
    padding: 8px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
