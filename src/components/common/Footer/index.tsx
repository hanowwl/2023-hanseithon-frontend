import React from "react";

import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface FooterProps {
  staffs: Record<string, (string | { name: string; link: string })[]>;
}

export const Footer: React.FC<FooterProps> = ({ staffs }) => {
  return (
    <S.FooterContainer>
      <Container>
        <S.FooterInnerContainer>
          <S.FooterSection>
            <S.FooterSchoolName>한세사이버보안고등학교 총학생회 한울</S.FooterSchoolName>
            <S.FooterSchoolAddress>
              04129 서울특별시 마포구 마포대로 11길 44-89 (아현동, 한세사이버보안고등학교)
            </S.FooterSchoolAddress>
            <S.FooterSchoolContact>
              <S.FooterSchoolContactLink href="mailto:hansei.hanowl@gmail.com">
                hansei.hanowl@gmail.com
              </S.FooterSchoolContactLink>{" "}
              (문의) |{" "}
              <S.FooterSchoolContactLink href="mailto:hansei.stucon@gmail.com">
                hansei.stucon@gmail.com
              </S.FooterSchoolContactLink>{" "}
              (후원관련)
            </S.FooterSchoolContact>
          </S.FooterSection>

          <S.FooterSection>
            <S.FooterStaffGroupList>
              {Object.keys(staffs).map((group, i) => {
                return (
                  <S.FooterStaffGroupItem key={i}>
                    <S.FooterStaffGroupName>{group}</S.FooterStaffGroupName>

                    <S.FooterStaffList>
                      {staffs[group].map((staff, i) => {
                        const isStaffObject = typeof staff === "object";

                        return (
                          <S.FooterStaffItem key={i}>
                            {isStaffObject ? (
                              <S.FooterLink href={staff.link} target="_blank">
                                {staff.name}
                              </S.FooterLink>
                            ) : (
                              staff
                            )}
                          </S.FooterStaffItem>
                        );
                      })}
                    </S.FooterStaffList>
                  </S.FooterStaffGroupItem>
                );
              })}
            </S.FooterStaffGroupList>
          </S.FooterSection>
        </S.FooterInnerContainer>

        <S.FooterInnerContainer>
          <S.FooterDocumentList>
            <li>
              <S.FooterLink href="/docs/privacy" target="_blank">
                개인정보처리방침
              </S.FooterLink>
            </li>
            <li>
              <S.FooterLink href="/docs/rules" target="_blank">
                한세톤 운영 규칙
              </S.FooterLink>
            </li>
          </S.FooterDocumentList>
        </S.FooterInnerContainer>
      </Container>
    </S.FooterContainer>
  );
};
