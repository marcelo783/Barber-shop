import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import breakpoints from "../../styles/breakPoints";

export const Navigation = styled.header`
    position:fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;


`;


export const Nav = styled.nav`
   background-color:#000000;
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    justify-content: center;


    @media ${breakpoints.bg} {
    padding: 2rem 0;

  }

  @media ${breakpoints.md} {
    padding: 2rem 0;
  }
`;
export const Ul = styled.ul`
    display: flex;
    width:  45%;
    justify-content: space-between;

    @media ${breakpoints.bg} {
    width: 80%;
    justify-content: space-around;
  }

  @media ${breakpoints.md} {
    width: auto;
    flex-direction: column;
    align-items: center;
  }

   `;
export const Li = styled.li`
  @media ${breakpoints.md} {
    margin-bottom: 1rem; // Ajuste conforme necessário
  }

`;
export const Logo = styled.div`
/img {
    //height: 100px;
   // width: auto;
  }

`;

export const InstagramIcon = styled(FaInstagram)`
  color: #D4B853;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-right: 15px;
  font-size: 30px;

  &:hover {
    color: #E1306C;
  }
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: #D4B853;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: 15px;
  font-size: 30px;
  &:hover {
    color: #25D366;
  }


`;

export const IconContainer = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;

  @media ${breakpoints.bg} {
    margin-left: 50px;
  }

  @media ${breakpoints.md} {
    margin-left: 50px; // Ajuste conforme a necessidade
  }
`;
export const StyledLink = styled(Link)`
  color: #D4B853;
  font-family: 'Permanent Marker';
  font-size:1.65rem;
  position: relative;
  text-decoration: none;


  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #D4B853;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media ${breakpoints.bg} {
    font-size:1.4rem;
  }

  @media ${breakpoints.md} {
    font-size: 1.2rem; // Reduz a fonte para melhor ajuste
  }
`;

export const StyledA = styled.a`
  color: #D4B853;
  font-family: 'Permanent Marker';
  font-size:1.65rem;
  position: relative;
  text-decoration: none;


  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color:  #D4B853;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  @media ${breakpoints.bg} {
    font-size:1.4rem;
  }

   @media ${breakpoints.md} {
    font-size: 1.2rem; // Consistente com StyledLink
  }
`;
