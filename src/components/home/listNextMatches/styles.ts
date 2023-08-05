import { styled } from "@linaria/react";

export const StyledListNext = styled.ul`
  display: flex;
  flex-direction: column;
  width: 17%;
  border-radius: 16px ;
  gap:8px
  background-color: var(--color-gray-450);
  justify-content: space-between;
  & li{
    border-bottom:2px solid var(--color-gray-200);
    padding:16px;

  }
`;
