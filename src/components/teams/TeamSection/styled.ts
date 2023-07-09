import styled from "@emotion/styled";

export const TeamSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TeamSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const TeamSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
`;

export const TeamSectionDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.text.secondary.default};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const TeamSectionActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const TeamSectionChildrenContainer = styled.div`
  overflow: auto;
`;
