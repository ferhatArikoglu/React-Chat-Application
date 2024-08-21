import React from 'react';
import GlobalStyle from './components/styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Welcome to Chat Application</h1>
      </div>
    </>
  );
};

export default App;
