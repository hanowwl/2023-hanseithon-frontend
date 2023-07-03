import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Container } from "src/components/layouts";

export const HackathonSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HackathonSectionInnerContainer = styled(Container)`
  text-align: center;
`;

export const HackathonSectionTitle = styled(motion.h2)`
  font-size: 4.4rem;
  font-weight: 800;
`;

export const EmojiText = styled(motion.p)`
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

export const HackathonDescription = styled(motion.p)`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 2.9rem;

  strong {
    font-weight: 700;
  }
`;
