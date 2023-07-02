import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const HanseithonSectionInnerContainer = styled(Container)`
  padding: 10rem 0;
`;

export const HanseithonSectionContent = styled.div`
  width: 100%;
  max-width: 1140px;

  margin: 17.6rem auto 0 auto;
`;

export const HanseithonSectionSectionTitle = styled.h1`
  font-size: 4.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const HanseithonSectionSectionDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.text.secondary.default};
  margin-bottom: 4.8rem;
`;

export const EmojiCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3.5rem;

  & > div {
    width: 100% !important;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2.4rem;
    grid-row-gap: 2.4rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 2.4rem;
    grid-row-gap: 2.4rem;
  }
`;
