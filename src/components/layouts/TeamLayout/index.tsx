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
    <Container style={{ padding: "2.4rem 0 4.8rem 0", minHeight: "calc(100vh - 9rem)" }}>
      <S.TeamLayoutBannerContainer>
        <Image
          src={TeamsBannerPNG}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "2.2rem" }}
          quality={100}
        />
      </S.TeamLayoutBannerContainer>

      <S.TeamLayoutChildrenContainer>{children}</S.TeamLayoutChildrenContainer>
    </Container>
  );
};
