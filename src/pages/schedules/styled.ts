import styled from "@emotion/styled";

export const ScheduleSection = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const FirstContainer = styled.div``;
export const ScheduleUl = styled.ul<{ marginTop?: string; marginBottom?: string }>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;
export const ScheduleLi = styled.li``;
