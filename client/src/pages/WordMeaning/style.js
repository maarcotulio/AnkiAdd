import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  height: auto;
  text-align: left;
  padding: 16px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 42px;
  }

  p {
    font-size: 18px;
    white-space: pre-line;
  }

  .loading {
    text-align: center;
  }
`;

export const DefinitionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
  }

  button:hover {
    transform: scale(1.1);
  }

  button svg {
    fill: ${({ theme }) => theme.colors.font};
  }
`;
