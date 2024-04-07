import styled from "styled-components";
import breakpoints from "./breakPoints";

export const Container = styled.div`
    padding: 0 10rem;

    @media ${breakpoints.bg} {
        padding: 0 5rem; // Reduz o padding nas laterais para telas menores
    }

    @media ${breakpoints.sm} {
        padding: 0 4rem; // Reduz o padding nas laterais para telas menores
    }


`;

export const ImgSections = styled.section`
 padding-top:9.2rem;
 position: relative;
 height:100vh;
 width: 100%;
 overflow: hidden;

 @media ${breakpoints.bg} {
    height:auto;
    }


`;

export const Sections = styled.section`
 padding-top:5rem;
 position: relative;
 height:100vh;
 width: 100%;
 overflow: hidden;

 @media ${breakpoints.bg} {
        height:auto;
        padding-top: 3rem; // Reduz o padding-top para telas menores
    }

    @media ${breakpoints.md} {
        height:auto;
        padding-top: 3rem; // Reduz o padding-top para telas menores
    }

    @media ${breakpoints.xs} {
        height:auto;
        padding-top: 3rem; // Reduz o padding-top para telas menores
    }



`;

export const SectionsContact = styled.section`
padding-top:5rem;
text-align:center;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 position: relative;
 height:50vh;
 width: 100%;

 @media ${breakpoints.bg} {
        height:auto;
    }

    @media ${breakpoints.sm} {
        height:auto;
        display:flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
`;

