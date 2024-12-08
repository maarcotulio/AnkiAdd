import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
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

  @media (max-width: 1500px) {
    display: ${({ isvisible }) => isvisible};
  }

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

export const Menu = styled.div`
  @media (max-width: 1500px) {
    display: block;
    position: absolute;
    margin-top: 32px;
    width: 8px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 32px;
    background-color: orange;

    &:hover {
      cursor: pointer;
    }
  }

  display: none;
`;
