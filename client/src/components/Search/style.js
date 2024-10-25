import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.search.background};
  display: flex;
  width: 600px;
  margin: 0 6px;
  padding: 0 4px;
  height: 30px;
  border-radius: 14px;
  fill: ${({ theme }) => theme.colors.font};

  &:hover {
    cursor: text;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  border-radius: 14px;
  padding: 0 4px;
  font-size: 18px;
  resize: none;
  font-family: "Sora", sans-serif;
  color: ${({ theme }) => theme.colors.font};
  background: ${({ theme }) => theme.colors.search.background};
`;
