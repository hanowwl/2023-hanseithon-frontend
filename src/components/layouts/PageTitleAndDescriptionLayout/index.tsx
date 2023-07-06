import React from "react";

import * as S from "./styled";

const PageTitleAndDescriptionLayout = (props: { title: string; children: React.ReactNode }) => {
  return (
    <S.TitleContainer>
      <S.TitleText>{props.title}</S.TitleText>
      <S.TitleDesc>{props.children}</S.TitleDesc>
    </S.TitleContainer>
  );
};

export { PageTitleAndDescriptionLayout };
