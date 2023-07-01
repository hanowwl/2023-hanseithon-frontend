import React from "react";

import * as S from "./styled";

export interface ButtonProps {
  currentDateBool: boolean;
}

const Button: React.FC<ButtonProps> = ({ currentDateBool }) => {
  return (
    <S.ButtonElement current={currentDateBool}>
      <S.ButtonText>7월 20일 (목)</S.ButtonText>
    </S.ButtonElement>
  );
};

export { Button };
