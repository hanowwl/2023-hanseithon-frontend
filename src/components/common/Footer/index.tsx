import React from "react";

import { StaffsItems } from "src/constants";

import * as S from "./styled";

export interface FooterProps {
  staffList: StaffsItems[];
}

export const Footer: React.FC<FooterProps> = ({ staffList }) => {
  return (
    <S.FooterContainer>
      <S.FooterBox>
        <S.FooterInnerContainer>
          <S.SchoolName>한세사이버보안고등학교 총학생회 한울</S.SchoolName>
          <S.SchoolAdress>
            04129 서울특별시 마포구 마포대로 11길 44-80 (아현동, 한세사이버보안고등학교)
          </S.SchoolAdress>
          <S.SchoolContact>
            hansei.hanowl@gmail.com (문의) | hansei.stucon@gmail.com (후원관련)
          </S.SchoolContact>
        </S.FooterInnerContainer>
        <S.FooterInnerContainer>
          {staffList.map(({ contents, staffs }, i) => (
            <S.TeamContainer key={i}>
              <S.TeamText>{contents}</S.TeamText>
              <S.MemberContainer>
                {staffs.map((item, i) => (
                  <S.TeamText key={i}>{item}</S.TeamText>
                ))}
              </S.MemberContainer>
            </S.TeamContainer>
          ))}
        </S.FooterInnerContainer>
      </S.FooterBox>
    </S.FooterContainer>
  );
};
