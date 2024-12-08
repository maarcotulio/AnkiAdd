import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.header.background};
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  width: 100%;
  height: auto;

  h1 {
    font-family: "Sora", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 280px) {
    h2 {
      font-size: large;
    }
  }
`;
