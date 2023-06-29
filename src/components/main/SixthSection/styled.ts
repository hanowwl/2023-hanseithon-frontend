import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SixthSection = styled.section`
  width: 100%;
  height: 400vh;

  display: flex;
`;

export const SixthContent = styled(motion.div)`
  position: relative;

  margin: 0 auto;
  top: 27.8rem;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
`;

export const SixthContentText = styled.p`
  font-size: 6rem;
  font-weight: 700;

  text-align: center;
`;
