import React from "react";
import { WhatsappIcon } from "../header/Header.style";
import {  FooterCard, LogoFooter, Rodape, FooterCardImg, Panimation  } from "./footer.style";
import  LogoWhite  from "../../imagens/logo_branca.svg";
import { PF } from "../../styles/Typography.style";


const Footer = () => {
    return(
    <div>
        <Rodape>
          <FooterCard >
          <Panimation>Estamos Online</Panimation>
           <WhatsappIcon>

           </WhatsappIcon>
          </FooterCard>

          <FooterCardImg>
          <LogoFooter>
          <img src={LogoWhite} alt="" />
          </LogoFooter>
          </FooterCardImg>

          <FooterCard >
          <PF> desenvolvimento</PF>
          <PF>atropa@atropa.com.br</PF>
          </FooterCard>
        </Rodape>
    </div>
    )

};

export default Footer;