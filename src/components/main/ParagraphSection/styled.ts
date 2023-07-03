import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ParagraphSection = styled.section`
  width: 100%;
  height: 200vh;
`;

export const ParagraphSectionContentContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ParagraphContentText = styled(motion.p)`
  font-size: 6.8rem;
  font-weight: 900;
  line-height: 200%;
  text-align: center;
  user-select: none;
`;
