import React from "react";
import { useState, useEffect, useRef } from "react";
import { H1 } from "../../styles/Typography.style";
import { Container } from "../../styles/common.style";
import { ContainerGallery, Carousel, Inner, Item } from "./gallery.style";
import img1  from '../../imagens/img slide/corte1.jpg'
import img2  from '../../imagens/img slide/corte2.jpg'
import img3  from '../../imagens/img slide/corte3.jpg'
import img4  from '../../imagens/img slide/corte4.jpg'
import img5  from '../../imagens/img slide/corte5.jpg'
import img6  from '../../imagens/img slide/corte6.jpg'


const images = [img1, img2, img3, img4, img5, img6]


const Gallery = () => {

    const carousel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (
        <div>
            <Container>
                <H1>Galeria</H1>
            <ContainerGallery>

                <Carousel ref={carousel} whileTap={{ cursor:"grabbing"}}>
                    <Inner drag="x"
                    dragConstraints={{ right: 0, left: - width}}
                    >
                        {images.map(image => (
                            <Item key={image}>
                                <img src={image} alt="img" />
                            </Item>
                        ))}
                    </Inner>
                </Carousel>
            </ContainerGallery>

            </Container>
        </div>
    )
}

export default Gallery;