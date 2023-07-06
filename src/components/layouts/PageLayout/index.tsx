import React from "react";

import * as S from "./styled";
import { Container } from "../Container";

export interface PageLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  return (
    <Container>
      <S.PageLayoutInfoContainer>
        <S.PageLayoutTitle>{title}</S.PageLayoutTitle>
        <S.PageLayoutDescription>{description}</S.PageLayoutDescription>
      </S.PageLayoutInfoContainer>

      <main>{children}</main>
    </Container>
  );
};
