import React from 'react';
import GlobalStyle from './components/styles/GlobalStyles';
import ChatBox from './components/ChatBox/ChatBox';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ChatBox />
    </>
  );
};

export default App;
