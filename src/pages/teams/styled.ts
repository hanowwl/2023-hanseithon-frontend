import styled from "@emotion/styled";

export const TeamSectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.8rem;
`;

export const NewMakerListContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TeamsGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const CreateTeamModalInputContainer = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
