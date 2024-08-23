import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:3001");

export function useChatSocket(username: string, room: string) {
  const [messages, setMessages] = useState<{ id: string, text: string; sender: string; status: string; time: string, color: string }[]>([]);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [room]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (message: { id: string, text: string, sender: string, status: string, time: string, color: string }) => {
    socket.emit("send_message", { message, room });
  };

  return { messages, setMessages, chatEndRef, sendMessage };
}
