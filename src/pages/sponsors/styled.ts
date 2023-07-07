import styled from "@emotion/styled";

export const SponsorGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.8rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;

    & > div {
      width: 100%;
      height: 28rem;
    }
  }
`;
