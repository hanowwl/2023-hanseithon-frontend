import React from "react";

import * as S from "./styled";
import { Container } from "../Container";

export interface PageLayoutProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  gap?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
  gap = "3.8rem",
}) => {
  return (
    <Container style={{ padding: "2rem 0 6rem 0", minHeight: "calc(100vh - 9rem)" }}>
      <S.PageLayoutInfoContainer gap={gap}>
        <S.PageLayoutTitle>{title}</S.PageLayoutTitle>
        <S.PageLayoutDescription>{description}</S.PageLayoutDescription>
      </S.PageLayoutInfoContainer>

      <main>{children}</main>
    </Container>
  );
};
