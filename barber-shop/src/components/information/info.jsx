import React from "react";
import { Container, Sections,  } from '../../styles/common.style';
import { H1, Para } from "../../styles/Typography.style";
import { InfoWrapper, InfoText, InfoImage } from "./info.stlyle";
import Infoimg from "../../imagens/FOTO BARBEIRO.jpg";
const Info = () => {

    return (

        <div>
            <Container>
                <Sections >
                    <H1 id="quem-somos" >Quem Somos</H1>
                    <InfoWrapper>
                    <InfoImage>
                        <img src={Infoimg} alt="info" />
                    </InfoImage>
                    <InfoText>
                        <Para>Bem-vindo à Barbearia Feke, o ponto de encontro entre tradição e modernidade no universo do cuidado masculino. Desde nossa fundação em [Ano de Fundação] pelo visionário [Nome do Fundador], nos dedicamos a transformar cada visita em uma experiência única.

                        Nossa equipe, composta por especialistas em cortes clássicos e estilos contemporâneos, está empenhada em oferecer não apenas um serviço excepcional, mas também um momento de pausa e renovação. Aqui, cada detalhe, da decoração ao atendimento personalizado, é pensado para garantir que você saia se sentindo renovado, por dentro e por fora.
                        
                        </Para>
                    </InfoText>
                </InfoWrapper>
                </Sections>
            </Container>
        </div>
    )


};

export default Info;