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
