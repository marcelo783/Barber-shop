import React from "react";


import { HeroImage, LogoImage } from "./Hero.style";
import HeroImg from "../../imagens/men.jpg";
import  LogoImag  from "../../imagens/logo-barber-2.png";
import { ImgSections } from "../../styles/common.style";



const Hero = () => {
    return (
        <div>

            <ImgSections>

                <HeroImage>
                    <img src={HeroImg} alt="hero" />
                </HeroImage>

                <LogoImage>
                    <img src={LogoImag} alt="" />
                </LogoImage>

            </ImgSections>


        </div>
    )
}

export default Hero

