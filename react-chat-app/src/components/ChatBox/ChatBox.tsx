import React, { useState, useEffect } from "react";
import { ChatBoxContainer } from "./ChatBoxStyles";
import MessageList from "./MessageList/MessageList";
import ChatInput from "./ChatInput/ChatInput";
import Header from "../Header/Header";
import { useChatSocket } from './useChatSocket/useChatSocket';
import { getRandomColor } from "../Utils/utils";

interface ChatBoxProps {
  username: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ username }) => {
  const [input, setInput] = useState('');
  const [userColor, setUserColor] = useState<string>(getRandomColor());
  const room = "general";
  
  const { messages, chatEndRef, sendMessage } = useChatSocket(username, room);

  const handleSendMessage = () => {
    if (input.trim()) {
      const message = { 
        id: Date.now().toString(), 
        text: input, 
        sender: username, 
        status: "sent", 
        time: new Date().toLocaleTimeString(), 
        color: userColor 
      };
      sendMessage(message);
      setInput('');
    }
  };

  const handleSendImageMessage = (count: number) => {
    for (let i = 0; i < count; i++) {
      const imageMessage = { 
        id: Date.now().toString() + i, 
        text: `<img src="https://picsum.photos/200/300?random=${Math.random()}" alt="Random Image" />`, 
        sender: 'Server', 
        status: "sent", 
        time: new Date().toLocaleTimeString(), 
        color: '#888' 
      };
      sendMessage(imageMessage);
    }
  };

  return (
    <>
      <Header username={username} />
      <ChatBoxContainer>
        <MessageList messages={messages} username={username} chatEndRef={chatEndRef} />
        <ChatInput 
          input={input} 
          setInput={setInput} 
          sendMessage={handleSendMessage} 
          sendImageMessage={handleSendImageMessage} 
        />
      </ChatBoxContainer>
    </>
  );
};

export default ChatBox;
