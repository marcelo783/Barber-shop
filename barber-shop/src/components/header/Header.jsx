import React from 'react';
import { Navigation, Nav, Ul, Li, Logo, InstagramIcon, WhatsappIcon, IconContainer, StyledLink, StyledA  } from './Header.style';
import logo from '../../imagens/logo.svg'
import { Link } from 'react-router-dom';


import { Container } from '../../styles/common.style';



const Header = () => {
  return (
    <div>
      <Container>
      <Navigation>
        <Nav>
          <Logo>
          {/*<img src={logo} alt="" />*/}
          </Logo>

          <Ul>
            <Li>
              <StyledLink to={`#`}>Início</StyledLink>
            </Li>
            <Li>
              <StyledLink to={`#`}>Quem Somos</StyledLink>
            </Li>
            <Li>
              <StyledLink to={`#`}>Serviços</StyledLink>
            </Li>
            <Li>
              <StyledLink to={`#`}>Galeria</StyledLink>
            </Li>
            <Li>
              <StyledLink to={`#`}>Contato</StyledLink>
            </Li>
            <Li>
            <StyledA href="https://www.instagram.com/seuUsuario">Agendar</StyledA>
            </Li>
          </Ul>

          <IconContainer>
          <a href="https://www.instagram.com/seuUsuario" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={30}/>
          </a>
          <a href="https://wa.me/seuNumeroWhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon size={30}/>
          </a>
        </IconContainer>
        </Nav>
      </Navigation>
      </Container>

    </div>
  );
};

export default Header;
