import React from "react";

import { useRouter } from "next/router";

import * as S from "./styled";

export interface ButtonProps {
  detailDate: string;
  currentDateBool: boolean;
  pushUrl: string;
}

const Button: React.FC<ButtonProps> = ({ currentDateBool, detailDate, pushUrl }) => {
  const router = useRouter();
  const ButtonPush = (pushString: string) => {
    router.push(`/schedules/${pushString}`).catch((err) => {
      console.log(err);
    });
  };
  return (
    <S.ButtonElement onClick={() => ButtonPush(pushUrl)} current={currentDateBool}>
      <S.ButtonText>{detailDate}</S.ButtonText>
    </S.ButtonElement>
  );
};

export { Button };
