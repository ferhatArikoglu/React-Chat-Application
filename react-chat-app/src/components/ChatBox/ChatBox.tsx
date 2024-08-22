import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { ChatBoxContainer, InputContainer } from "./ChatBoxStyles";
import Message from "../Message/Message";
import Header from "../Header/Header";

const socket = io("http://localhost:3001");

interface ChatBoxProps {
  username: string;
}

const ChatBox: React.FC<ChatBoxProps> = ({ username }) => {
  const [messages, setMessages] = useState<{ id: string, text: string; sender: string; status: string; time: string }[]>([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const room = "general";

  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (message: { id: string, text: string; sender: string; status: string; time: string }) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("message_seen", (messageId: string) => {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId ? { ...msg, status: "Görüldü" } : msg
        )
      );
    });

    return () => {
      socket.off("receive_message");
      socket.off("message_seen");
    };
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus durumu dinleme
  useEffect(() => {
    const handleFocus = () => {
      messages.forEach((msg) => {
        if (msg.status === "Gönderildi" && msg.sender !== username) {
          socket.emit("message_seen", { messageId: msg.id, room });
        }
      });
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [messages, username]);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { id: Date.now().toString(), text: input, sender: username, status: "Gönderildi", time: new Date().toLocaleTimeString() };
      socket.emit("send_message", { message, room });
      setInput('');
    }
  };

  return (
    <>
      <Header username={username} />
      <ChatBoxContainer>
        {messages.map((msg, index) => (
          <Message 
            key={index} 
            text={msg.text} 
            sender={msg.sender} 
            isSender={msg.sender === username}
            status={msg.status}
            time={msg.time}
          />
        ))}
        <div ref={chatEndRef} />
        <InputContainer>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Mesajınızı yazın..." />
          <button onClick={sendMessage}>Gönder</button>
        </InputContainer>
      </ChatBoxContainer>
    </>
  );
};

export default ChatBox;
