import styled from 'styled-components';

export const ChatBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
  overflow-y: auto;
  position: relative;
  background-color: #f5f5f5;
`;

export const InputContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ccc;

  input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
  }

  button {
    padding: 12px 20px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export const MessageContainer = styled.div<{ isSender: boolean }>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  margin: 5px 0;
`;

export const MessageBubble = styled.div<{ isSender: boolean }>`
  background-color: ${({ isSender }) => (isSender ? '#007bff' : '#e5e5ea')};
  color: ${({ isSender }) => (isSender ? 'white' : 'black')};
  padding: 15px;
  border-radius: 25px;
  max-width: 60%;
  word-wrap: break-word;
  font-size: 14px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const StatusText = styled.div<{ status: string }>`
  font-size: 12px;
  color: ${({ status }) => (status === "Görüldü" ? '#007bff' : '#fff')};
  display: inline-block;
  margin-top: 5px;
`;
