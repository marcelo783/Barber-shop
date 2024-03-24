import React from "react";
import { Pa } from "../../styles/Typography.style";
import { WhatsappIcon } from "../header/Header.style";
import {  FooterCard, LogoFooter, Rodape, FooterCardImg } from "./footer.style";
import  LogoWhite  from "../../imagens/logo_branca.svg";


const Footer = () => {
    return(
    <div>
        <Rodape>
          <FooterCard >
          <Pa>Estamos Online</Pa>
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