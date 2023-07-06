import React from "react";

import * as S from "./styled";

export interface ScheduleElementProps {
  time: string;
  nowSchedule: string;
  isCurrentSchedule: boolean;
  isToday: boolean;
}

const ScheduleDateElement: React.FC<ScheduleElementProps> = ({
  time,
  nowSchedule,
  isCurrentSchedule,
  isToday,
}) => {
  return (
    <S.ScheduleElement>
      <S.ScheduleTime current={isToday}>{time}</S.ScheduleTime>
      <S.ScheduleNow current={isCurrentSchedule}>{nowSchedule}</S.ScheduleNow>
    </S.ScheduleElement>
  );
};

export { ScheduleDateElement };
