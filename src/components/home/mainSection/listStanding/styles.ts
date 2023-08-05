import { styled } from "@linaria/react";

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--color-gray-450);
  border-radius: 16px;
  gap: 16px;
  height: 22%;
`;

export const StyledListStanding = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;

  & li {
    border-bottom: 2px solid var(--color-gray-200);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-gray-100);
    font-weigth: 600;
  }
`;
