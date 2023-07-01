import React from "react";

import * as S from "./styled";

export interface ButtonProps {
  detailDate: string;
  currentDateBool: boolean;
}

const Day: React.FC<ButtonProps> = ({ currentDateBool, detailDate }) => {
  return (
    <S.DayElement current={currentDateBool}>
      <S.ButtonText>{detailDate}</S.ButtonText>
    </S.DayElement>
  );
};

export { Day };
