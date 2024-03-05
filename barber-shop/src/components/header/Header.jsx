import React from 'react';
import { Navigation, Nav, Ul, Li, Logo } from './Header.style';
import logo from '../../imagens/logo.svg'



const Header = () => {
  return (
   <div>
       <Navigation>
           <Nav>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
           </Nav>
       </Navigation>
   </div>
  );
};

export default Header;
