import styled from "@emotion/styled";

export const FiveSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  background-color: #141414;
`;

export const FiveSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 8.4rem auto 0 auto;
`;

export const FiveSectionTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;

  text-align: center;
`;

export const FiveSectionDescription = styled.h2`
  color: #9e9e9e;

  font-size: 2.4rem;
  font-weight: 500;

  margin-top: 1.2rem;
  text-align: center;
`;

export const CompanyLogoContents = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin: 6.8rem auto 0 auto;
`;

export const Logo = styled.img`
  width: 32.1rem;
  height: 11.2rem;
`;
