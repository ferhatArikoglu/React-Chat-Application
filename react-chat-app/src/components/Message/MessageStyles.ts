import styled from "styled-components";

interface MessageProps {
  isSender: boolean;
}

export const MessageWrapper = styled.div<MessageProps>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  margin: 12px 0;
`;

export const MessageContainer = styled.div<MessageProps>`
  display: flex;
  justify-content: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
  padding: 0 10px;
`;

export const MessageBubble = styled.div<MessageProps>`
  background-color: ${({ isSender }) => (isSender ? '#007bff' : '#FFFFFF')};
  color: ${({ isSender }) => (isSender ? '#FFFFFF' : '#333')};
  padding: 12px 15px;
  border-radius: ${({ isSender }) => (isSender ? '18px 18px 0px 18px' : '18px 18px 18px 0px')};
  width: fit-content;
  max-width: 65%;
  word-wrap: break-word;
  font-size: 14px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  white-space: pre-wrap;
  align-self: ${({ isSender }) => (isSender ? 'flex-end' : 'flex-start')};

  @media (max-width: 768px) {
    padding: 10px 12px;
    font-size: 13px;
    max-width: 80%;
  }
`;

export const StatusText = styled.div`
  font-size: 10px;
  color: #888;
  margin-top: 4px;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const TickWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4px;
`;

export const InitialBubble = styled.div`
  background-color: ${({ color }) => color || '#4D90FE'};
  color: white;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  font-size: 16px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
