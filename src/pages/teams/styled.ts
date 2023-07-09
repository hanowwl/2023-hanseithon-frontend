import styled from "@emotion/styled";

export const NewMakerContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  gap: 1.2rem;
  margin-top: 1.7rem;
`;

export const TeamsTitle = styled.h1`
  margin-top: 5.3rem;

  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.08rem;
`;
export const TeamsDescription = styled.p`
  color: #878b92;

  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: -0.056rem;

  margin-top: 0.4rem;
`;
export const TeamsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

//users
export const UserInformationTagWrapper = styled.div`
  margin-top: 0.4rem;
  margin-right: 0.4rem;

  border-radius: 0.5rem;
  background-color: #1774fe;
`;
export const UserInformationTag = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: -0.048rem;

  padding: 0.4rem 0.6rem;
`;
