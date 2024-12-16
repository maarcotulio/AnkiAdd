import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  color: #fff;

  .btn-toPage {
    background-color: ${({ theme }) => theme.colors.header.background};
    width: 96px;
    height: auto;
    padding: 8px;
    border-radius: 4px;

    a {
      text-decoration: none;
      text-align: center;
      color: inherit;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 280px) {
    flex-direction: column;
    gap: 16px;
  }
`;
