import styled from "@emotion/styled";

export const TeamLogSectionsGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(32rem, 40rem);
  margin-top: 5rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(28rem, 36rem);
    grid-row-gap: 2.4rem;
  }
`;

export const TeamMembersListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: auto;

  @media screen and (max-width: 991px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;
