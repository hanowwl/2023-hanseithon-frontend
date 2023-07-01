import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const SecondSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondSectionInnerContainer = styled(Container)`
  text-align: center;
`;

export const SecondSectionTitle = styled.h2`
  font-size: 4.4rem;
  font-weight: 800;
`;

export const EmojiText = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;
  font-size: 6rem;
`;

export const Emoji = styled.span`
  font-size: 9.6rem;
  font-weight: 600;
`;

export const HackathonDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.9rem;

  strong {
    font-weight: 700;
  }
`;
