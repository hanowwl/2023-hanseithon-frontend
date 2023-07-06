import React, { useState } from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import * as S from "./styled";

export interface SponsorCardProps {
  name: string;
  description: React.ReactNode;
  logo: StaticImageData;
  link: string;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({ name, description, logo, link }) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <S.SponsorCardContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <S.SponsorCardLogoLayer>
        <Image src={logo} alt={`${name} 로고`} style={{ width: "100%", height: "auto" }} />
      </S.SponsorCardLogoLayer>

      <Link href={link} style={{ width: "100%", height: "100%", textDecoration: "none" }}>
        <S.SponsorCardDetailLayer
          initial="hide"
          animate={isHover ? "show" : "hide"}
          variants={{
            hide: { opacity: 0 },
            show: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div>
            <S.SponsorName>{name}</S.SponsorName>
            <S.SponsorDescription>{description}</S.SponsorDescription>

            <S.SponsorDescription style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
              ※ 클릭 시, 후원사 홈페이지로 이동해요
            </S.SponsorDescription>
          </div>
        </S.SponsorCardDetailLayer>
      </Link>
    </S.SponsorCardContainer>
  );
};
