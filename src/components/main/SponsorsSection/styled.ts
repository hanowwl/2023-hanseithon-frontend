import styled from "@emotion/styled";

export const SponsorsSection = styled.section`
  width: 100%;
  padding: 8.3rem 0;
  background-color: #141414;
  text-align: center;
`;

export const SponsorsSectionTitle = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

export const SponsorsSectionDescription = styled.h2`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.text.secondary.default};
  margin-bottom: 6.8rem;
`;

export const SponsorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2.4rem;

  @media screen and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const SponsorLogoWrapper = styled.div`
  max-width: 32rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 4.2rem;
  border-radius: 1.2rem;
  margin: 0 auto;
  transition: background 150ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;
