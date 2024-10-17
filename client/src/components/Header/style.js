import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.header.background};
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;

  h1 {
    font-family: "Sora", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .logoAndLanguage {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
