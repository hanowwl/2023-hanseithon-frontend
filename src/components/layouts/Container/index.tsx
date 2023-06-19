import styled from "@emotion/styled";

export const Container = styled.div<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${(props) => props.maxWidth || "1140px"};
  margin: 0 auto;
`;
