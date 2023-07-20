import styled from "@emotion/styled";

export const TeamLogSectionsGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(32rem, 44rem);
  margin-top: 5rem;
  grid-gap: 2.4rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(28rem, 36rem);
    grid-row-gap: 2.4rem;
  }
`;

export const TeamMembersListContainer = styled.div`
  display: -webkit-inline-box;
  align-items: center;
  gap: 0.8rem;
  @media screen and (max-width: 991px) {
    flex-direction: column;

    & > div {
      width: 100%;
    }
  }
`;

export const TeamFileNameWrapper = styled.div`
  max-width: 24rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
