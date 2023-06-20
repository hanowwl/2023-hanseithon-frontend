import React from "react";

import * as S from "./styled";

export interface FirstProps {
  operatingPeriod: string;
  season: string;
  title: string;
  receiptPeriod: string;
}

const FirstSection: React.FC<FirstProps> = ({ operatingPeriod, season, title, receiptPeriod }) => {
  return (
    <S.MainSection>
      <S.PeriodContainer>
        <S.Period>{operatingPeriod}</S.Period>
      </S.PeriodContainer>
      <S.MainTitleContainer>
        <S.MainTitle>
          {season}
          <br />
          {title}
        </S.MainTitle>
      </S.MainTitleContainer>
      <S.Periodkr>{receiptPeriod}</S.Periodkr>
      <S.ScrollDown>
        <S.Chevrons>
          <S.ChevronDown></S.ChevronDown>
          <S.ChevronDown></S.ChevronDown>
        </S.Chevrons>
      </S.ScrollDown>
    </S.MainSection>
  );
};

export { FirstSection };
