import  styled  from "styled-components";
import BackgroundImg from '../../imagens/TESOURA1.svg';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
`;


export const ServicesGrid = styled.div`
 font-family: 'Permanent Marker';
  padding: 5rem 20rem;
  font-size:2.60rem;
  color:var(--White);
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem 1.25rem;
  align-items: center;
  margin-bottom: 20px;
`;



export const ServiceItem = styled.div`

  &:nth-child(odd) {

  }
`;

export const Price = styled.div`
  color:var(--Gold);
  text-align: center; 
`;
