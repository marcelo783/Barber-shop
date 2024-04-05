import  styled  from "styled-components";
import BackgroundImg from '../../imagens/TESOURA1.svg';
import breakpoints from "../../styles/breakPoints";


export const SectionService = styled.section`
 padding-top:5rem;
 position: relative;
 height:100vh;
 width: 100%;
 overflow: hidden;

 @media ${breakpoints.bg} {
        height:57vh;
        padding-top: 3rem; // Reduz o padding-top para telas menores

    }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;

  @media ${breakpoints.bg} {
    height: 50vh; /* Reduzindo a altura da imagem de fundo em telas menores */
  }
`;


export const ServicesGrid = styled.div`
 font-family: 'Permanent Marker';
  padding: 5rem 20rem;
  font-size:2.40rem;
  color:var(--White);
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem 1.25rem;
  align-items: center;
  margin-bottom: 20px;

  @media ${breakpoints.bg} {
    padding: 5rem; /* Reduzindo o espaçamento em telas menores */
    font-size:2.40rem;
  }
`;



export const ServiceItem = styled.div`

  &:nth-child(odd) {

  }
`;

export const Price = styled.div`
  color:var(--Gold);
  text-align: center;

  @media ${breakpoints.bg} {
    font-size: 2rem; /* Reduzindo o tamanho do texto em telas menores */
    text-align: right;
  }
`;
