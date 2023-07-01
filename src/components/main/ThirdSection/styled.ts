import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const ThirdInnerContainer = styled(Container)`
  padding: 10rem 0;
`;

export const ThirdContent = styled.div`
  width: 100%;
  max-width: 1140px;

  margin: 17.6rem auto 0 auto;
`;

export const ThirdSectionTitle = styled.h1`
  font-size: 4.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const ThirdSectionDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.text.secondary.default};
  margin-bottom: 4.8rem;
`;

export const EmojiCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3.5rem;
`;
