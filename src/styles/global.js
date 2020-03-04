import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #ababab;
        -webkit-font-smoothing: antialiased;
    }

    #root {
        max-width: 800px;
        margin:  0 auto;
        padding: 0 20px 50px;
    }

    button {
        cursor: pointer;
    }


`