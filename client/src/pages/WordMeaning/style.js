import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  height: auto;
  text-align: left;
  padding: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
  }

  div button:hover {
    transform: scale(1.1);
  }

  div button svg {
    fill: ${({ theme }) => theme.colors.font};
  }

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
