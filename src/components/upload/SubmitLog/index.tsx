import React from "react";

import { Button } from "src/components/common";

import * as S from "./styled";

export interface SubmitLogProps {
  children?: React.ReactNode;
  uploadOnClick: React.ReactEventHandler;
}

export const SubmitLog: React.FC<SubmitLogProps> = ({ children, uploadOnClick }) => {
  return (
    <S.SubmitLogContainer>
      <S.SubmitTitleContainer>
        <S.SubmitTitle>업로드 파일</S.SubmitTitle>
        <S.SubmitDescription>등록된 업로드 예정 파일이에요</S.SubmitDescription>
      </S.SubmitTitleContainer>
      <S.FilesWrapper style={{ margin: "2.4rem 0", height: "31rem" }}>{children}</S.FilesWrapper>
      <Button fillWidth={true} onClick={uploadOnClick}>
        파일 업로드
      </Button>
    </S.SubmitLogContainer>
  );
};
