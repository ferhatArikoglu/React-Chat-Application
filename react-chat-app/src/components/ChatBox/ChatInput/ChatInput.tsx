import React from 'react';
import { InputContainer } from './ChatInputStyles';
import { FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  sendImageMessage: (count: number) => void; // Yeni fonksiyon
}

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, sendMessage, sendImageMessage }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (input.startsWith('/image')) {
        const parts = input.split(' ');
        const count = parseInt(parts[1]) || 1; // Sayıyı al
        sendImageMessage(count); // Görüntüleri gönder
      } else {
        sendMessage();
      }
      setInput(''); // Girdiği temizle
    }
  };

  return (
    <InputContainer>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Mesaj..."
        onKeyDown={handleKeyDown}  
      />
      <button onClick={() => {
        if (input.startsWith('/image')) {
          const parts = input.split(' ');
          const count = parseInt(parts[1]) || 1;
          sendImageMessage(count);
        } else {
          sendMessage();
        }
        setInput(''); 
      }}>
        <FaPaperPlane size={20} />
      </button>
    </InputContainer>
  );
};

export default ChatInput;
