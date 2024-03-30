import styled, { keyframes }  from "styled-components";

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
         // Faz a imagem cobrir o espaço disponível
    }

`;


export const LogoWhite = styled.div`
    position: absolute;
    transform: translateX(-50%); // Ajuste fino para centralizar exatamente
    width: 10vw;
    height:auto;

    img {
        width: auto;
        height: auto;
    }

`;

const blink = keyframes`
  from {
    opacity: 6;
  }

  to {
    opacity: 0;
  }
`;



export const Panimation = styled.p`
    animation: ${blink} 0.5s linear infinite alternate;
     font-size: 1.6rem;
     color: #40e340;
    font-family: "Irish Grover", system-ui;
`;



