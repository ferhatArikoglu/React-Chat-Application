// components/ChatBox/ChatBox.tsx
import React, { useState } from 'react';
import Message from '../Message/Message';
import { ChatBoxContainer, InputContainer } from './ChatBoxStyles';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'User' }]);
      setInput('');
    }
  };

  return (
    <ChatBoxContainer>
      <div>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <InputContainer>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </InputContainer>
    </ChatBoxContainer>
  );
};

export default ChatBox;
