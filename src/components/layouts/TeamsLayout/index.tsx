import React from "react";

import * as S from "./styled";
import { Container } from "../Container";

interface TeamsProps {
  children: React.ReactNode;
}

export const TeamsLayout: React.FC<TeamsProps> = ({ children }) => {
  return (
    <Container>
      <S.TeamsBanner></S.TeamsBanner>
      <main>{children}</main>
    </Container>
  );
};
