import React from "react";

import * as S from "./styled";

export type TitleProps = {
  mainText: string;
  descText: string;
};

const Title: React.FC<TitleProps> = ({ mainText, descText }) => {
  return (
    <S.TitleContainer>
      <S.TitleText>{mainText}</S.TitleText>
      <S.TitleDesc>{descText}</S.TitleDesc>
    </S.TitleContainer>
  );
};

export { Title };
