// components/Message.tsx
import React from 'react';

interface MessageProps {
  text: string;
  sender: string;
}

const Message: React.FC<MessageProps> = ({ text, sender }) => {
  return (
    <div>
      <strong>{sender}:</strong> {text}
    </div>
  );
};

export default Message;
