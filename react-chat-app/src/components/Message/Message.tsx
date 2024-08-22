import React from 'react';
import { MessageBubble, MessageContainer, StatusText } from '../ChatBox/ChatBoxStyles';

interface MessageProps {
  text: string;
  sender: string;
  isSender: boolean;
  status: string;
  time: string;
}

const Message: React.FC<MessageProps> = ({ text, sender, isSender, status, time }) => {
  return (
    <MessageContainer isSender={isSender}>
      <MessageBubble isSender={isSender}>
        <strong>{sender}: </strong> {text}
        <div style={{ fontSize: '10px', marginTop: '5px' }}>
          <StatusText status={status}>{status === "Görüldü" ? '✓✓' : '✓'} {time}</StatusText>
        </div>
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
