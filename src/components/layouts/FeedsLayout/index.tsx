import React from "react";

import { Container } from "../Container";

interface FeedsProps {
  children: React.ReactNode;
}

export const FeedsLayout: React.FC<FeedsProps> = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
