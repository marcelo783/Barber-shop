import React from "react";


import { HeroWrapper, HeroImage, LogoImage } from "./Hero.style";
import HeroImg from "../../imagens/men.jpg";
import  LogoImag  from "../../imagens/logo-barber-2.png";



const Hero = () => {
    return (
        <div>

            <HeroWrapper>

                <HeroImage>
                    <img src={HeroImg} alt="hero" />
                </HeroImage>

                <LogoImage>
                    <img src={LogoImag} alt="" />
                </LogoImage>


            </HeroWrapper>

        </div>
    )
}

export default Hero

