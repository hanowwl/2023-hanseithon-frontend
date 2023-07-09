import styled from "@emotion/styled";

import { Button } from "src/components/common";

export const RegisterPrevButton = styled(Button)`
  font-size: 1.6rem;
  font-weight: 500;
  color: #8f8f8f;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.07);
  }
`;
