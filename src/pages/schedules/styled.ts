import styled from "@emotion/styled";

import { Button } from "src/components/common";

export const ScheduleSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ScheduleContainer = styled.div`
  display: flex;

  margin-bottom: 5rem;
`;

export const ScheduleElementContainer = styled.div<{ current: boolean }>`
  transition: opacity 0.3s;

  opacity: ${(props) => (props.current ? "" : "0.5")};
`;

export const ScheduleUl = styled.ul`
  margin: 5.9rem auto 3.4rem auto;
`;
export const ScheduleLi = styled.li``;

export const ShowScheduleButton = styled(Button)<{ isCurrentDate: boolean }>`
  background-color: ${(props) => (props.isCurrentDate ? "#1774fe" : "#1F1F1F")};
`;
