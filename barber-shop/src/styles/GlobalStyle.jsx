import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
    --White: #FFFFFF;
    --Black: #000000;
    --DarkGrey: #1F1E1E;
    --Gold: #D4B853;
    }

    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;

    }

    html{
        font-size: 62.5%;
        scroll-padding-top:17%;
    }
    body {
        background-color:#1F1E1E;
        font-size: 'public Sans', 'sans-serif';

    }


`;

export default GlobalStyle;
