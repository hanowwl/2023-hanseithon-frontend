import styled from "@emotion/styled";

export const TeamLogSectionsGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(32rem, 40rem);
  margin: 5rem 0;
`;

export const TeamMembersListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  overflow: auto;
`;