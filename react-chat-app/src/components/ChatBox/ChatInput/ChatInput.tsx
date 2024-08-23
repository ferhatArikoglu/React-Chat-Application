import React, { useState, useEffect } from 'react';
import { InputContainer, AutoCompleteContainer, SelectContainer } from './ChatInputStyles';
import { FaPaperPlane } from 'react-icons/fa';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  sendMessage: () => void;
  sendImageMessage: (count: number) => void; 
  sendSelectMessage: (selection: string) => void;
}

const commonPhrases = ["Hello", "How are you?", "What's up?", "Good morning", "Good night", "Thank you", "Yes", "No", "See you", "Take care", "Great", "Awesome", "Sounds good", "Okay", "Sure", "Absolutely", "Let's go", "Good job", "Congratulations", "I agree"];

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, sendMessage, sendImageMessage, sendSelectMessage }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSelect, setShowSelect] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (input.startsWith('/image')) {
        const parts = input.split(' ');
        const count = parseInt(parts[1]) || 1;
        sendImageMessage(count);
      } else if (input.startsWith('/select')) {
        setShowSelect(true);
      } else {
        sendMessage();
      }
      setInput('');
    } else if (event.key === 'Tab' && suggestions.length > 0 && !isMobile) {
      event.preventDefault();
      setInput(suggestions[0]);
      setSuggestions([]);
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    if (value) {
      const matches = commonPhrases.filter(phrase => phrase.toLowerCase().startsWith(value.toLowerCase()));
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    sendSelectMessage(event.target.value);
    setShowSelect(false);
  };

  return (
    <InputContainer>
      <input 
        value={input} 
        onChange={(e) => handleInputChange(e.target.value)} 
        placeholder="Mesaj..."
        onKeyDown={handleKeyDown}  
      />
      {suggestions.length > 0 && (
        <AutoCompleteContainer>
          {suggestions.map((suggestion, index) => (
            <div key={index} style={{ padding: '5px', cursor: 'pointer' }} onClick={() => setInput(suggestion)}>
              {suggestion}
            </div>
          ))}
        </AutoCompleteContainer>
      )}
      {showSelect && (
        <SelectContainer>
          <select onChange={handleSelectChange}>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </SelectContainer>
      )}
      <button onClick={() => {
        if (input.startsWith('/image')) {
          const parts = input.split(' ');
          const count = parseInt(parts[1]) || 1;
          sendImageMessage(count);
        } else if (input.startsWith('/select')) {
          setShowSelect(true);
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
