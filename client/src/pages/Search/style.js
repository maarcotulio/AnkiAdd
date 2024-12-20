import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  margin-top: 60px;

  h1 {
    margin-bottom: 8px;
    text-align: center;
  }
`;

export const Input = styled.input`
  max-width: 600px;
  width: 100%;
  height: 40px;
  position: absolute;
  left: 50%;
  resize: none;
  transform: translateX(-50%);
  border-radius: 14px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.search.background};
  overflow: auto;
  scrollbar-width: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.search.text};
  transform: translateX(-50%);
  outline: none;
  padding: 16px;
  font-size: 18px;
  font-family: "Sora", sans-serif;
`;
