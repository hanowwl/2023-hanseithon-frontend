import React from "react";

import * as S from "./styled";

export interface ScheduleElementProps {
  time: string;
  nowSchedule: string;
  nowCurrent: boolean;
}

export interface ScheduleData {
  time: string;
  nowSchedule: string;
}

const Element: React.FC<ScheduleElementProps> = ({ time, nowSchedule, nowCurrent }) => {
  return (
    <S.ScheduleElement>
      <S.ScheduleTime>{time}</S.ScheduleTime>
      <S.ScheduleNow current={nowCurrent}>{nowSchedule}</S.ScheduleNow>
    </S.ScheduleElement>
  );
};

export { Element };
