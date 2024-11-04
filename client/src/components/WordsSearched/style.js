import styled from "styled-components";

export const Container = styled.div`
  margin-left: 8px;
  position: fixed;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  max-height: 800px;
  scrollbar-width: none;
  overflow: auto;
  border: solid;
  padding: 8px;
  gap: 8px;
  border-radius: 16px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ClearBtn = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 18px;
    height: 18px;

    &:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }
`;

export const WordContainer = styled.div`
  border-radius: 14px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors.search.background};
  border: none;
  padding: 8px 8px 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.search.text};
    font-size: 16px;
    font-family: "Sora", sans-serif;
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    height: 16px;

    &:hover {
      transform: scale(1.2);
      cursor: pointer;
    }
  }

  &:first-child {
    margin-top: 16px;
  }

  &:last-child {
    margin-bottom: 16px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
