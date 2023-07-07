import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { Button } from "src/components/common";

export const ScheduleTimetableContainer = styled.div<{ isActive?: boolean }>`
  width: 100%;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: opacity 150ms;
`;

export const ScheduleTimetableDateList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ScheduleTimetableDate = styled.h2`
  margin-bottom: 2.8rem;
`;

export const ScheduleTimetableDateButton = styled(Button)<{ isActive?: boolean }>`
  font-size: 1.8rem;

  ${(props) =>
    !props.isActive &&
    css`
      background-color: #1f1f1f;
    `}
`;

export const ScheduleTimetableList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
