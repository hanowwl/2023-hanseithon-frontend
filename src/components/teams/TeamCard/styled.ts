import styled from "@emotion/styled";

export const TeamCardContainer = styled.div`
  min-width: 37rem;
  padding: 2rem 2.4rem;
  border-radius: 1.2rem;
  background-color: #171717;
`;

export const TeamType = styled.p`
  width: fit-content;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.048rem;
  border-radius: 0.5rem;
  background-color: #1774fe;
  margin-bottom: 0.8rem;
`;

export const TeamName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.072rem;
  margin-bottom: 0.6rem;
`;

export const TeamDescription = styled.p`
  color: #878b92;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: -0.064rem;
  margin-bottom: 2rem;
`;

export const TeamMembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const TeamMemberListContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0 0.4rem;
  }
`;

export const TeamMemberTypeLabel = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  color: #428eff;
  margin-right: 0.8rem;
`;

export const TeamMember = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
`;
