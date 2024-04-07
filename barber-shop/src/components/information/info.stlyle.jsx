import  styled  from "styled-components";
import breakpoints from "../../styles/breakPoints";


export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;

    @media ${breakpoints.bg} {
        flex-direction: column; // Altera a direção do flex para coluna em telas menores
    }
`;

export const InfoImage = styled.div`
    border: 1vh solid var(--Gold);
    width: 100%;
    height: 70vh;
    max-width: 70vh;
    overflow: hidden;
    img {
        width: 100%; /* Garante que a imagem sempre ocupe 100% da largura da div */
        height: 100%; /* Mantém a proporção da imagem ao ajustar a largura */
        object-fit: cover;
        display: block; /* Evita espaços extras abaixo da imagem */
    }
    @media ${breakpoints.bg} {
        max-width: 60vh; /* Reduz a largura máxima da div quando a largura da tela for menor que 942px */
        height: 68vh;
        margin-bottom: 2rem; // Adiciona margem inferior para separar a imagem do texto em telas menores
    }

    @media ${breakpoints.md} {
        max-width: 53vh; /* Reduz a largura máxima da div quando a largura da tela for menor que 942px */
        height: 64vh;
        margin-bottom: 4rem; // Adiciona margem inferior para separar a imagem do texto em telas menores
    }

    @media ${breakpoints.sm} {
        max-width: 53vh; /* Reduz a largura máxima da div quando a largura da tela for menor que 942px */
        height: 48vh;
        margin-bottom: 4rem; // Adiciona margem inferior para separar a imagem do texto em telas menores
    }
`;

export const InfoText = styled.div`
    flex: 1;
    padding: 0 2rem;

    @media ${breakpoints.md} {
        padding: 0; // Remove o padding horizontal em telas menores
    }
`;
