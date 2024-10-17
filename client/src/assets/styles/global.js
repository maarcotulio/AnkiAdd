import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        font-size: 16px;
        font-family: "Poppins", sans-serif;
        color: ${({ theme }) => theme.colors.font}
    }

    button {
        cursor: pointer;
    }
`;
