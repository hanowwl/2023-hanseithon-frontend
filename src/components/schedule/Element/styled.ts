import styled from "@emotion/styled";

export const ScheduleElement = styled.div`
  display: flex;

  margin-bottom: 1.6rem;
`;

export const ScheduleTime = styled.h2`
  padding: 1.6rem 2.2rem;
  margin: auto 0 auto 0;

  border-radius: 0.8rem;
  background-color: #171717;

  font-size: 2rem;
  font-weight: 500;
  letter-spacing: -0.08rem;
`;
export const ScheduleNow = styled.h2<{ current: boolean }>`
  width: 38.3rem;
  padding: 1.6rem 0;
  margin-left: 1rem;

  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.08rem;

  border-radius: 0.8rem;
  background-color: ${(props) => (props.current ? "#1774fe" : "")};
`;
