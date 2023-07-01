import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const pulse = keyframes`
  0% {
    opacity: 0;
  }
    
  100% {
    opacity: 0.5;
  }
`;

export const FirstSection = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-top: -9rem;
`;

export const FirstSectionLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const FirstSectionVideo = styled.video`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  object-fit: cover;
  z-index: -2;
`;

export const FirstSectionContentContainer = styled.div`
  position: absolute;
  top: 44.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FirstSectionTitle = styled(motion.h1)`
  font-size: 12rem;
  font-weight: 900;
  text-align: center;
  user-select: none;
  letter-spacing: 3.8rem;
`;

export const OperationPeriod = styled(motion.p)`
  font-size: 3.2rem;
  font-weight: 200;
  text-align: center;

  margin-bottom: 5.8rem;
  letter-spacing: 1rem;
`;

export const ApplicationPeriod = styled(motion.p)`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;

  margin-top: 5.6rem;
  letter-spacing: 0.01rem;
`;

export const DownArrowButton = styled(motion.button)`
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%, 0);
  border: none;
  outline: none;
  background: none;

  display: flex;
  flex-direction: column;

  & > svg:not(:last-child) {
    margin-bottom: -0.5rem;
  }

  & > svg:nth-of-type(1) {
    /* opacity: 0.2; */
    animation: ${pulse} 500ms ease infinite alternate;
  }

  & > svg:nth-of-type(2) {
    /* opacity: 0.6; */
    animation: ${pulse} 500ms ease infinite alternate 250ms;
  }

  & > svg:nth-of-type(3) {
    /* opacity: 0.9; */
    animation: ${pulse} 500ms ease infinite alternate 500ms;
  }
`;

export const GradientCircle = styled(motion.div)<{ size: string; degree: number }>`
  position: absolute;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  user-select: none;

  background: ${(props) =>
    `linear-gradient(${props.degree}deg, #5871b2 0%, #458bcd 50%, #cfe6fc 100%);`};
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
`;
