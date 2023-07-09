import React from "react";

import * as S from "./styled";

export interface ScheduleTimeProps {
  time: string;
  schedule: string;
  isCurrentSchedule?: boolean;
}

export const ScheduleTime: React.FC<ScheduleTimeProps> = ({
  time,
  schedule,
  isCurrentSchedule = false,
}) => {
  return (
    <S.ScheduleTimeContainer>
      <S.ScheduleTimeText>{time}</S.ScheduleTimeText>
      <S.ScheduleTimeName isCurrentSchedule={isCurrentSchedule}>{schedule}</S.ScheduleTimeName>
    </S.ScheduleTimeContainer>
  );
};
