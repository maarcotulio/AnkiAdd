import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
  }

  button:hover {
    transform: scale(1.1);
  }

  button svg {
    fill: ${({ theme }) => theme.colors.font};
  }
`;
