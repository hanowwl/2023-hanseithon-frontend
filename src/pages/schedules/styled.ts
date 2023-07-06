import styled from "@emotion/styled";

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

export const ScheduleUl = styled.ul<{ marginTop?: string; marginBottom?: string }>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-right: auto;
  margin-left: auto;
`;
export const ScheduleLi = styled.li``;
