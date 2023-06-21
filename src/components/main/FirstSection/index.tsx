import React from "react";

import * as S from "./styled";

export interface FirstProps {
  operatingPeriod: string;
  receiptPeriod: string;
}

const FirstSection: React.FC<FirstProps> = ({ operatingPeriod, receiptPeriod }) => {
  return (
    <S.FirstSection>
      <S.PeriodContainer>
        <S.Period>{operatingPeriod}</S.Period>
      </S.PeriodContainer>
      <S.MainTitleContainer>
        <S.MainTitle>
          6TH
          <br />
          HANSEITHON
        </S.MainTitle>
      </S.MainTitleContainer>
      <S.Periodkr>{receiptPeriod}</S.Periodkr>
      <S.ScrollDown>
        <S.Chevrons>
          <S.ChevronDown></S.ChevronDown>
          <S.ChevronDown></S.ChevronDown>
        </S.Chevrons>
      </S.ScrollDown>
    </S.FirstSection>
  );
};

export { FirstSection };
