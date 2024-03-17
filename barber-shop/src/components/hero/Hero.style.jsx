import styled from "styled-components";

export const HeroImage = styled.div`
    height: 100%;
    width: 100%;

    img {

        width: 100%;
        height: 100%;
        object-fit: cover; // Faz a imagem cobrir o espaço disponível
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
`;


