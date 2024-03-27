import React from "react";
import { WhatsappIcon } from "../header/Header.style";
import {  FooterCard, LogoFooter, Rodape, FooterCardImg, Panimation  } from "./footer.style";
import  LogoWhite  from "../../imagens/logo_branca.svg";
import { Pa } from "../../styles/Typography.style";


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
          <Pa> desenvolvimento</Pa>
          <Pa>atropa@atropa.com.br</Pa>
          </FooterCard>
        </Rodape>
    </div>
    )

};

export default Footer;