import styled from "styled-components";

export const Rodape = styled.footer`
 padding:0 10rem;
   width:100%;
   height:19vh;
   align-items: center;
   background-color:black;
   display:flex;
  justify-content: space-between;
`;

export const FooterCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const FooterCardImg = styled.div`

`;


export const LogoFooter = styled.div`
    height: 17vh;
    width: 6vw;

    img {

        width: 100%;
        height: 100%;
        object-fit: cover; // Faz a imagem cobrir o espaço disponível
    }

`;


export const LogoWhite = styled.div`
    position: absolute;
    transform: translateX(-50%); // Ajuste fino para centralizar exatamente
    width: 10dvw;
    height:auto;

    img {
        width: auto;
        height: auto;
    }

`;