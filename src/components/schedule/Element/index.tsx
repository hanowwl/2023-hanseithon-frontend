import React from "react";

import * as S from "./styled";

const Element: React.FC = () => {
  return (
    <S.ScheduleElement>
      <S.ScheduleTime>15:00 ~ 15:30</S.ScheduleTime>
      <S.ScheduleNow>참가자 입장 및 등록</S.ScheduleNow>
    </S.ScheduleElement>
  );
};

export { Element };
