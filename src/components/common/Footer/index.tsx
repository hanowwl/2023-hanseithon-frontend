import React from "react";

import { STAFFS_LIST } from "src/constants";

import * as S from "./styled";

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.asdf>
        <S.FooterInnerContainer>
          <S.SchoolText>한세사이버보안고등학교 총학생회 한울</S.SchoolText>
          <S.SchoolSubText>
            04129 서울특별시 마포구 마포대로 11길 44-80 (아현동, 한세사이버보안고등학교)
          </S.SchoolSubText>
          <S.SchoolThirdText>
            hansei.hanowl@gmail.com (문의) | hansei.stucon@gmail.com (후원관련)
          </S.SchoolThirdText>
        </S.FooterInnerContainer>
        <S.FooterInnerContainer>
          {STAFFS_LIST.map(({ contents, staffs }, i) => (
            <div style={{ display: "grid", gridTemplateColumns: "0.2fr 1fr" }} key={i}>
              <S.TeamText>{contents}</S.TeamText>

              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {staffs.map((item, i) => (
                  <S.TeamText key={i}>{item}</S.TeamText>
                ))}
              </div>
            </div>
          ))}
        </S.FooterInnerContainer>
      </S.asdf>
    </S.FooterContainer>
  );
};
