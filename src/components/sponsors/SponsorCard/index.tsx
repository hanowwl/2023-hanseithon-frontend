import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";

import { useMediaQuery } from "src/hooks";

import * as S from "./styled";

export interface SponsorCardProps {
  name: string;
  description: React.ReactNode;
  logo: StaticImageData;
  link: string;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({ name, description, logo, link }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: "991px" });

  return (
    <S.SponsorCardContainer
      onClick={isMobile ? () => setIsHover((prev) => !prev) : undefined}
      onMouseEnter={!isMobile ? () => setIsHover(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHover(false) : undefined}
    >
      <S.SponsorCardLogoLayer>
        <Image src={logo} alt={`${name} 로고`} style={{ width: "100%", height: "auto" }} />
      </S.SponsorCardLogoLayer>

      <S.SponsorCardDetailLayer
        initial="hide"
        animate={isHover ? "show" : "hide"}
        variants={{
          hide: { opacity: 0, display: "none" },
          show: { opacity: 1, display: "flex" },
        }}
        transition={{ duration: 0.2 }}
      >
        <S.SponsorCardLink href={link} target="_blank">
          <div>
            <S.SponsorName>{name}</S.SponsorName>
            <S.SponsorDescription>{description}</S.SponsorDescription>

            <S.SponsorDescription style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
              ※ 클릭 시, 후원사 홈페이지로 이동해요
            </S.SponsorDescription>
          </div>
        </S.SponsorCardLink>
      </S.SponsorCardDetailLayer>
    </S.SponsorCardContainer>
  );
};
