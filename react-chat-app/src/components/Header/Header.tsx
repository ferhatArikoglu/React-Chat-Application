import React from 'react';
import { HeaderContainer } from './HeaderStyles';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <HeaderContainer>
      {username} ile Sohbet
    </HeaderContainer>
  );
};

export default Header;
