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

export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-top: -9rem;

  @media screen and (max-width: 768px) {
    background: conic-gradient(
      from 180deg at 50% 50%,
      #3f86cb 0deg,
      #6da4da 71.25deg,
      #cae5fb 172.5deg,
      #82bff5 249.37deg,
      #3f86cb 360deg
    );
  }
`;

export const MainSectionLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  video {
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    object-fit: cover;
    z-index: -2;
  }
`;

export const MainSectionVideo = styled.video``;

export const MainSectionContentContainer = styled.div`
  position: absolute;
  top: 44.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainSectionTitle = styled(motion.h1)`
  font-size: 12rem;
  font-weight: 900;
  text-align: center;
  user-select: none;
  letter-spacing: 3.8rem;

  @media screen and (max-width: 992px) {
    font-size: 7.2rem;
    letter-spacing: 2.28rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.9rem;
    letter-spacing: 1.2rem;
  }
`;

export const OperationPeriod = styled(motion.p)`
  font-size: 3.2rem;
  font-weight: 200;
  text-align: center;

  margin-bottom: 5.8rem;
  letter-spacing: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    margin-bottom: 4.35rem;
  }
`;

export const ApplicationPeriod = styled(motion.p)`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;

  margin-top: 5.6rem;
  letter-spacing: 0.01rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
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
