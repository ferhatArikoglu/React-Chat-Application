import React from 'react';
import { InitialBubble, MessageBubble, MessageContainer, StatusText, MessageWrapper } from './MessageStyles';

interface MessageProps {
  text: string;
  isSender: boolean;
  time: string;
  sender: string;
  color: string;
}

const Message: React.FC<MessageProps> = ({ text, isSender, time, sender, color }) => {
  const initial = sender.charAt(0).toUpperCase();

  const renderContent = () => {
    if (text.startsWith('<img')) {
      return <div dangerouslySetInnerHTML={{ __html: text }} />;
    }
    return text;
  };

  return (
    <MessageWrapper isSender={isSender}>
      <MessageContainer isSender={isSender}>
        {!isSender && (
          <InitialBubble color={color}>
            {initial}
          </InitialBubble>
        )}
        <div style={{ width: '100%', display: 'flex', justifyContent: isSender ? 'flex-end' : 'flex-start' }}>
          <MessageBubble isSender={isSender}>
            {renderContent()}
          </MessageBubble>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StatusText>{time}</StatusText>
          </div>
        </div>
      </MessageContainer>
    </MessageWrapper>
  );
};

export default Message;
