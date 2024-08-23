import React from 'react';
import { InputContainer } from './ChatInputStyles';
import { FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, sendMessage }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <InputContainer>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Mesaj..."
        onKeyDown={handleKeyDown}  // Enter tuşu ile gönderme
      />
      <button onClick={sendMessage}>
        <FaPaperPlane size={20} />
      </button>
    </InputContainer>
  );
};

export default ChatInput;
