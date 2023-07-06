import styled from "@emotion/styled";

export const PageLayoutInfoContainer = styled.div<{ gap: string }>`
  margin-bottom: ${(props) => props.gap};
`;

export const PageLayoutTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

export const PageLayoutDescription = styled.p`
  color: #878b92;
  font-size: 1.6rem;
  font-weight: 500;

  letter-spacing: -0.064rem;
`;
