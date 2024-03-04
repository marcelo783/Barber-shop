import React from 'react';
import { Header, Nav, Logo } from './style'
import LogoImagens from '../../pages/imagens/logo barber.svg'

function Home() {


  return (
   <Header>
     <Logo src={LogoImagens} alt="Logo" />
     <Nav>
        <ul>
          <li>Início</li>
          <li>Quem Somos</li>
          <li>Serviços</li>
          <li>Galeria</li>
          <li>Contato</li>
          <li>Agendar</li>
        </ul>
      </Nav>
   </Header>
  )
}

export default Home
