import { motion } from "framer-motion";
import  styled  from "styled-components";

export const ContainerGallery = styled.div`
    width:100%;
    max-width: 90vw;
    margin: 0 auto;
    min-height:80vh;
    display: flex;
    align-items:center;
    justify-content: center;
    

`;

export const Carousel = styled(motion.div)`
    cursor: grab;
    overflow:hidden;


`;

export const Inner = styled(motion.div)`
display: flex;

`;

export const Item = styled(motion.div)`
    min-height: 20vh;
    min-width: 23vw;
    padding: 1.2rem;

    img{
        width: 100%;
        height: 90%;
        border: 1vh solid var(--Gold);
        pointer-events:none;
    }

`;