import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  height: 30px;
  bottom: 0;

  a {
    height: 3;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.font};
    border: 2px solid ${({ theme }) => theme.colors.header.background};
    padding: 4px;
    border-radius: 4px;
  }
`;
