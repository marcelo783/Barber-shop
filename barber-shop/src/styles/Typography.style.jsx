import  styled from "styled-components";
import breakpoints from "./breakPoints";



export const H1 = styled.h1`
    text-align:center;
    font-size: 3.1rem;
    color:var(--Gold);
    font-family: 'Permanent Marker';


`;

export const H2 = styled.h2`
    font-size: 2.1rem;
    color:var(--Gold);
    font-family: 'Permanent Marker';

    @media ${breakpoints.bg} {
        font-size: 2.50rem;

    }
`;


export const Pa = styled.p`
    margin-top:2vh;
    font-size: 1.6rem;
    color: var(--White);
    font-family: "Irish Grover", system-ui;

    @media ${breakpoints.bg} {
        font-size: 2.40rem;
    }

    @media ${breakpoints.md} {
        font-size: 2.10rem;
    }
`;

export const PF = styled.p`
    margin-top:2vh;
    font-size: 1.6rem;
    color: var(--White);
    font-family: "Irish Grover", system-ui;

    @media ${breakpoints.bg} {
        font-size: 1.6rem;

    }

    @media ${breakpoints.md} {
        font-size: 1.3rem;

    }
`;


export const Para = styled.p`
    padding-left: 4rem;
    width:100%;
    display: flex;
    align-items: center;
    justify-content:center;
    text-align: justify;
    font-size: 1.6rem;
    color: var(--White);
    font-family: "Irish Grover", system-ui;

    @media ${breakpoints.bg} {
        padding-left: 0; // Remove o padding à esquerda em telas menores
        padding:0 8rem;

    }
`;

