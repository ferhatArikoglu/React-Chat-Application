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



  @media (max-width: 768px) {
    /* Mobil ekranlar için stil */
    height: calc(100vh - 80px);
    padding: 5px;
  }
`;




