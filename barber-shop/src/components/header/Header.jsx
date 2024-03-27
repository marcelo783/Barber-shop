import React from 'react';
import { Navigation, Nav, Ul, Li, Logo, InstagramIcon, WhatsappIcon, IconContainer, StyledLink, StyledA  } from './Header.style';
import logo from '../../imagens/logo.svg'
import { Link } from 'react-router-dom';
import { Container } from '../../styles/common.style';

const scrollToSection = (sectionId) => {
  if (sectionId === 'topo') {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola até o topo da página
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};



const Header = () => {
  return (
    <div id="inicio">
      <Container>
      <Navigation>
        <Nav>
          <Logo>
          {/*<img src={logo} alt="" />*/}
          </Logo>

          <Ul>
            <Li>
            <StyledLink onClick={() => scrollToSection('inicio')}>Início</StyledLink>
            </Li>
            <Li>
            <StyledLink onClick={() => scrollToSection('quem-somos')}>Quem Somos</StyledLink>
            </Li>
            <Li>
            <StyledLink onClick={() => scrollToSection('servicos')}>Serviços</StyledLink>
            </Li>
            <Li>
            <StyledLink onClick={() => scrollToSection('galeria')}>Galeria</StyledLink>
            </Li>
            <Li>
            <StyledLink onClick={() => scrollToSection('contato')}>Contato</StyledLink>
            </Li>
            
          </Ul>

          <IconContainer>
          <a href="https://www.instagram.com/seuUsuario" target="_blank" rel="noopener noreferrer">
            <InstagramIcon/>
          </a>
          <a href="https://wa.me/seuNumeroWhatsApp" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon/>
          </a>
        </IconContainer>
        </Nav>
      </Navigation>
      </Container>

    </div>
  );
};

export default Header;
