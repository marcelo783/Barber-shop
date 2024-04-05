import React from "react";
import { H1 } from "../../styles/Typography.style";
import { BackgroundImage, ServiceItem, Price, ServicesGrid, SectionService } from "../../components/servicess/service.style"



const Service = () => {
    return (
        <div>
            <SectionService>
                <BackgroundImage>
                    <H1  id="servicos">Serviços</H1>
                    <ServicesGrid>
        <ServiceItem>SOBRANCELHA</ServiceItem>
        <Price>R$ 5,00</Price>
        <ServiceItem>Cabelo SOCIAL máquina</ServiceItem>
        <Price>R$ 17,00</Price>
        <ServiceItem>Cabelo social  tes. + maq</ServiceItem>
        <Price>R$ 22,00</Price>
        <ServiceItem>Cabelo SOCIAL tesoura</ServiceItem>
        <Price>R$ 25,00</Price>
        <ServiceItem>Degradê</ServiceItem>
        <Price>R$ 22,00</Price>
        <ServiceItem>Degradê NAvalhado</ServiceItem>
        <Price>R$ 25,00</Price>
        <ServiceItem>BARBA</ServiceItem>
        <Price>R$ 15,00</Price>

        <ServiceItem>corte + Barba</ServiceItem>
        <Price>R$ 35,00</Price>
      </ServicesGrid>

                </BackgroundImage>

            </SectionService>
        </div>

    )
}

export default Service