import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import './fonts.css';

const GlobalStyle = createGlobalStyle`
    ${normalize}
    html,
    body {
        height: 100%;
        background-color: #fff;
        letter-spacing: .015rem;
        font-weight: 400;
        line-height: 20px;
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
    }

    :root {
        --opacity: 0;
        --color: #fff;
        --scroll-top: 0;
    }

    a {
        text-decoration: none;
        cursor: default;
    }

    ul {
        list-style: none;
    }

    * ,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    * {
        outline: none;
        -webkit-text-size-adjust: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    #root {
        max-height: 100vh;
    }
`;

export default GlobalStyle;
