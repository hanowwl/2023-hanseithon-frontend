import React from "react";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface SponsorInfo {
  name: string;
  logo: StaticImageData;
  url?: string;
}

export interface FiveProps {
  sponsors: SponsorInfo[];
}

const FiveSection: React.FC<FiveProps> = ({ sponsors }) => {
  return (
    <S.FiveSection>
      <Container>
        <S.FiveSectionTitle>한세톤 후원사</S.FiveSectionTitle>
        <S.FiveSectionDescription>한세톤 운영에 도움을 주신 후원사에요</S.FiveSectionDescription>

        <S.SponsorsList>
          {sponsors.map(({ name, logo, url }, i) => {
            if (url) {
              return (
                <Link key={i} href={url} target="_blank" style={{ textDecoration: "none" }}>
                  <S.SponsorLogoWrapper>
                    <Image
                      key={i}
                      src={logo}
                      alt={name}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </S.SponsorLogoWrapper>
                </Link>
              );
            }

            return (
              <S.SponsorLogoWrapper key={i}>
                <Image key={i} src={logo} alt={name} style={{ width: "100%", height: "auto" }} />
              </S.SponsorLogoWrapper>
            );
          })}
        </S.SponsorsList>
      </Container>
    </S.FiveSection>
  );
};

export { FiveSection };
