import React from "react";

import * as S from "./styled";

export interface ScheduleElementProps {
  time: string;
  nowSchedule: string;
  nowCurrent: boolean;
  dayBoolean: boolean;
}

const Element: React.FC<ScheduleElementProps> = ({ time, nowSchedule, nowCurrent, dayBoolean }) => {
  return (
    <S.ScheduleElement>
      <S.ScheduleTime current={dayBoolean}>{time}</S.ScheduleTime>
      <S.ScheduleNow current={nowCurrent}>{nowSchedule}</S.ScheduleNow>
    </S.ScheduleElement>
  );
};

export { Element };
