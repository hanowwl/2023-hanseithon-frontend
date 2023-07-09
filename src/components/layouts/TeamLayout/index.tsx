import React from "react";

import Image from "next/image";

import { TeamsBannerPNG } from "src/assets";

import * as S from "./styled";
import { Container } from "../Container";

export interface TeamLayoutProps {
  children?: React.ReactNode;
}

export const TeamLayout: React.FC<TeamLayoutProps> = ({ children }) => {
  return (
    <Container>
      <S.TeamLayoutBannerContainer>
        <Image
          src={TeamsBannerPNG}
          alt=""
          style={{ width: "100%", height: "100%" }}
          quality={100}
        />
      </S.TeamLayoutBannerContainer>
      <main>{children}</main>
    </Container>
  );
};
