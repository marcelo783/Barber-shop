import  styled  from "styled-components";
import breakpoints from "../../styles/breakPoints";


export const ContainerMap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;

`;

export const MapBox = styled.div`
    position:relative;
    width: 60vw;
    height: 65vh;

    @media ${breakpoints.md} {
        width: 75vw;
    }

`;

export const MapIfreme = styled.iframe`
    width: 100%;
    height:100%;
`;