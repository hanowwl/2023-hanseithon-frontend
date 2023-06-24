import React from "react";

import * as S from "./styled";

export interface FiveData {
  companyLogo: string;
}

export interface FiveProps {
  companyArr: FiveData[];
}

const FiveSection: React.FC<FiveProps> = ({ companyArr }) => {
  return (
    <S.FiveSection>
      <S.FiveSectionWrapper>
        <S.FiveSectionTitle>한세톤 후원사</S.FiveSectionTitle>
        <S.FiveSectionDescription>한세톤과 함께하는 후원사들이에요</S.FiveSectionDescription>
        <S.CompanyLogoContents>
          {companyArr.map((item, idx) => {
            return <S.Logo key={idx} src={item.companyLogo} />;
          })}
        </S.CompanyLogoContents>
      </S.FiveSectionWrapper>
    </S.FiveSection>
  );
};

export { FiveSection };
