import Link from "next/link";

import styled from "@emotion/styled";

// FIXME: 절대 경로로 컴포넌트 호출 시, Dependency Circle 이슈 발생
// 해당 이슈로 인해 Container가 undefined로 리턴됨)

import { Container } from "../../layouts/Container";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 4rem 0;
  color: #9a9a9a;
  background-color: #141414;
`;

export const FooterInnerContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FooterSection = styled.div``;

export const FooterText = styled.p`
  font-size: 1.4rem;
`;

export const FooterLink = styled(Link)`
  color: unset;
  user-select: all;
  text-decoration: none;
  transition: color 150ms;

  &:hover {
    color: ${(props) => props.theme.color.primary.lighter};
  }
`;

export const FooterSchoolName = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

export const FooterSchoolAddress = styled(FooterText)`
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
`;

export const FooterSchoolContact = styled(FooterText)`
  font-size: 1.4rem;
  user-select: none;
`;

export const FooterSchoolContactLink = styled(FooterLink)`
  letter-spacing: -0.01em;
`;

export const FooterStaffGroupList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.4rem;
  user-select: none;
`;

export const FooterStaffGroupItem = styled.li`
  display: flex;
  gap: 2rem;
`;

export const FooterStaffGroupName = styled.p`
  font-weight: 600;
`;

export const FooterStaffList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-column-gap: 2.4rem;
  gap: 1.2rem;
`;

export const FooterStaffItem = styled.li`
  font-weight: 300;

  a {
    user-select: none;
  }
`;

export const FooterDocumentList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.4rem;
  font-weight: 500;
`;
