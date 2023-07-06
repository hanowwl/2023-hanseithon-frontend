import styled from "@emotion/styled";

export const ScheduleTimeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;

  & > div {
    font-size: 2rem;
    letter-spacing: -0.08rem;
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
  }
`;

export const ScheduleTimeText = styled.div`
  width: 16.4rem;
  font-weight: 500;
  background-color: #0d0d0d;
`;

export const ScheduleTimeName = styled.div<{ isCurrentSchedule?: boolean }>`
  flex: 1 1 auto;
  font-weight: 700;
  background-color: ${(props) => (props.isCurrentSchedule ? "#1774fe" : "")};
`;
