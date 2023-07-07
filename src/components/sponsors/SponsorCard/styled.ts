import Link from "next/link";

import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const SponsorCardContainer = styled.div`
  position: relative;
  width: 36rem;
  height: 20rem;
  user-select: none;
`;

export const SponsorCardLayer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.6rem;
  color: ${(props) => props.theme.color.text.primary.default};
`;

export const SponsorCardLogoLayer = styled(SponsorCardLayer)`
  padding: 0 6rem;
  z-index: -1;
  background-color: ${(props) => props.theme.color.foreground};

  @media screen and (max-width: 991px) {
    padding: 0 10rem;
  }
`;

export const SponsorCardDetailLayer = styled(SponsorCardLayer)`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(3px);
  cursor: pointer;
`;

export const SponsorName = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

export const SponsorDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 140%;
  color: #9a9ea4;
`;

export const SponsorCardLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: unset;
`;
