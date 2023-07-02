import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Container } from "src/components/layouts";

export const SixthSection = styled.section`
  width: 100%;
  height: 200vh;
`;

export const SixthSectionContentContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SixthSectionInnerContainer = styled(Container)``;

export const SixthContent = styled(motion.div)`
  position: relative;

  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  background-color: red;
`;

export const SixthContentText = styled(motion.p)`
  font-size: 6.8rem;
  font-weight: 900;
  line-height: 200%;
  text-align: center;
  user-select: none;
`;
