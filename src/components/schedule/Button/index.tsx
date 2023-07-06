import React from "react";

import * as S from "./styled";

export interface ButtonProps {
  detailDate: string;
  currentDateBool: boolean;
}

const Button: React.FC<ButtonProps> = ({ currentDateBool, detailDate }) => {
  return (
    <S.ButtonElement current={currentDateBool}>
      <S.ButtonText>{detailDate}</S.ButtonText>
    </S.ButtonElement>
  );
};

export { Button };
