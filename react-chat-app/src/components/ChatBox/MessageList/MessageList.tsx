import React from 'react';
import Message from '../../Message/Message';

interface MessageListProps {
  messages: any[];
  username: string;
  chatEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({ messages, username, chatEndRef, }) => {
  return (
    <>
      {messages.map((msg) => (
        <Message
          key={msg.id}
          text={msg.text}
          isSender={msg.sender === username}
          time={msg.time}
          sender={msg.sender}
          color={msg.color}
        />
      ))}
      <div ref={chatEndRef} />
    </>
  );
};

export default MessageList;
