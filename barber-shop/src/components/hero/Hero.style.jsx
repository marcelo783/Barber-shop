import styled from "styled-components";
import breakpoints from "../../styles/breakPoints";

export const HeroImage = styled.div`
    height: 100%;
    width: 100%;

    img {

        width: 100%;
        height: 100%;
        object-fit: cover; // Faz a imagem cobrir o espaço disponível
    }

    @media ${breakpoints.bg} {
        height: 60vh; /* Altura reduzida para 60% da altura da tela */
    }

    @media ${breakpoints.md} {
        height: 50vh; /* Altura reduzida para 50% da altura da tela */
    }

    @media ${breakpoints.sm} {
        height: 40vh; /* Altura reduzida para 40% da altura da tela */
    }


`;

export const LogoImage = styled.div`
    position: absolute;
    top: 30vh;
    left: 12%;
    transform: translateX(-50%); // Ajuste fino para centralizar exatamente
    width: 174px;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }

    @media ${breakpoints.bg} {
        top: 20vh; /* Posição superior ajustada para 20% da altura da tela */
        width: 100px; /* Largura reduzida para 100px */
    }

    @media ${breakpoints.md} {
        top: 25vh; /* Posição superior ajustada para 20% da altura da tela */
        width: 100px; /* Largura reduzida para 100px */
    }

    @media ${breakpoints.sm} {
        top: 15vh; /* Posição superior ajustada para 15% da altura da tela */
        left: 14%; /* Ajuste fino para centralizar exatamente */
        transform: translateX(-50%);
        width: 80px; /* Largura reduzida para 80px */
    }
`;


