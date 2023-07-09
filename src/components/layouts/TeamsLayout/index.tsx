import React from "react";

import { Container } from "../Container";

interface TeamsProps {
  children: React.ReactNode;
}

export const TeamsLayout: React.FC<TeamsProps> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
