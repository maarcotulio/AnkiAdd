import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 600px;
  margin: 0 6px;
  padding: 0 4px;
  height: 30px;
  border-radius: 14px;
  fill: ${({ theme }) => theme.colors.font};

  input {
    border: none;
    outline: none;
    width: 100%;
    border-radius: 14px;
    padding: 0 4px;
    font-size: 18px;
    font-family: "Sora", sans-serif;
    color: ${({ theme }) => theme.colors.font};
  }

  &:hover {
    cursor: text;
  }

  &,
  input {
    background: ${({ theme }) => theme.colors.search.background};
  }
`;
