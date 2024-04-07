import styled, { keyframes }  from "styled-components";
import breakpoints from "../../styles/breakPoints";


export const Rodape = styled.footer`
   padding:0 10rem;
   width:100%;
   height:19vh;
   align-items: center;
   background-color:black;
   display:flex;
  justify-content: space-between;


    @media ${breakpoints.bg} {
      padding: 0 5rem;
    }

    @media ${breakpoints.sm} {
      padding: 0 2rem ;
    }


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

    @media ${breakpoints.bg} {
        height:20vh;
        width: 9vh;
    }

    @media ${breakpoints.sm} {
        height:15vh;
        width: 6vh;
    }

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
     font-size: 1.9rem;
     color: #40e340;
    font-family: "Irish Grover", system-ui;

    @media ${breakpoints.sm} {
      font-size: 1.2rem;

    }
`;



