import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  opacity: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  width: 60px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 6px solid;
  border-color: ${({ theme }) => theme.colors.font} #0000;
  animation: spin 1s infinite;
  position: absolute;

  @keyframes spin {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
