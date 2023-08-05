import { styled } from "@linaria/react";

export const StyledMainSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
  justify-content: space-between;
  & .divImg {
    height: 78%;
    border-radius: 16px;
    overflow: hidden;
  }
  & .imgBanner {
    width: 100%;
    height: 100%;
  }
`;
