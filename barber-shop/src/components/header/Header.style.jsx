import  styled  from "styled-components";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Navigation = styled.header`
    width: 100%;
`;
export const Nav = styled.nav`
    padding: 3rem 0;
    display: flex;
    justify-content: space-between;
    justify-content: center;
`;
export const Ul = styled.ul`
    display: flex;
    width:  55%;
    justify-content: space-between;

   `;
export const Li = styled.li`


`;
export const Logo = styled.div`
img {
    height: 100px;
    width: auto;
  }

`;

export const InstagramIcon = styled(FaInstagram)`
  color: #D4B853;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-right: 15px;

  &:hover {
    color: #E1306C;
  }
`;

export const WhatsappIcon = styled(FaWhatsapp)`
  color: #D4B853;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: 15px;
  &:hover {
    color: #25D366;
  }
`;

export const IconContainer = styled.div`
  margin-left: 100px;
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #D4B853; // Altere conforme necessário

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px; // Espessura da linha
    bottom: -5px; // Distância da linha em relação ao texto
    left: 0;
    background-color: #D4B853; // Cor da linha
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const StyledA = styled.a`
  position: relative;
  text-decoration: none;
  color:  #D4B853; // Ajuste a cor conforme necessário

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px; // Espessura da linha
    bottom: -5px; // Distância da linha em relação ao texto
    left: 0;
    background-color:  #D4B853; // Cor da linha
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
