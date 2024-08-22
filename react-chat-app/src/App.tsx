import React, { useState } from 'react';
import GlobalStyle from './components/styles/GlobalStyles';
import ChatBox from './components/ChatBox/ChatBox';

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  const handleSetUsername = (name: string) => {
    setUsername(name);
  };

  return (
    <>
      <GlobalStyle />
      {username ? (
        <ChatBox username={username} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <h2>Enter your username:</h2>
          <input
            type="text"
            onBlur={(e) => handleSetUsername(e.target.value)}
            placeholder="Type your username"
          />
        </div>
      )}
    </>
  );
};

export default App;
