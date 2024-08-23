import React from 'react';
import { HeaderContainer } from './HeaderStyles';

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <HeaderContainer>
    React Chat App
    </HeaderContainer>
  );
};

export default Header;
