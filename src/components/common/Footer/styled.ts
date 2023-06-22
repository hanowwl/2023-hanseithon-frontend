import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 27rem;
  background-color: #141414;
  display: flex;
  color: #9a9a9a;
  justify-content: center;
  align-items: center;
`;

export const FooterBox = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 8rem;
`;

export const FooterInnerContainer = styled.div`
  width: 60rem;
  height: 100% auto;
  display: flex;
  padding: 0.8rem;
  flex-direction: column;
`;

export const SchoolName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 1.3rem;
`;

export const SchoolAdress = styled.div`
  font-size: 1.6rem;
  letter-spacing: -0.01em;
`;

export const SchoolContact = styled.div`
  font-size: 1.4rem;
  margin-top: 3rem;
`;

export const TeamContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const MemberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TeamText = styled.div`
  font-size: 1.4rem;
  padding: 0.8rem;
  text-align: center;
`;
