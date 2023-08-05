import { styled } from "@linaria/react";

export const StyledMenuAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 23%;
`;
export const StyledCardMenu = styled.div`
  background-color: var(--color-gray-50);
  padding: 16px 24px;
  border-radius: 16px;

  cursor: pointer;
  & p {
    font-weight: 600;
    font-size: 1rem;
  }
  & svg {
    width: 40px;
    height: 40px;
  }
  &:hover {
    background-color: var(--color-blue-50);
    & p {
      color: var(--color-gray-50);
    }
    & svg {
      filter: invert(1);
    }
  }
`;
