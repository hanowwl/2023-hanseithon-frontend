import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContainer = styled(motion.div)`
  min-width: 32rem;
  padding: 2.8rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.foreground};
`;

export const ModalHeader = styled.div``;

export const ModalTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const ModalDescription = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color.text.secondary.default};
`;

export const ModalActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & > button {
    flex: 1 1 auto;
  }
`;

export const ModalChildrenContainer = styled.div`
  margin: 2.4rem 0;
`;
