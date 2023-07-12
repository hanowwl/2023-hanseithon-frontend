import React from "react";

import { Button } from "src/components/common";

import * as S from "./styled";

export interface SubmitLogProps {
  children?: React.ReactNode;
  uploadOnClick: React.ReactEventHandler;
  fileCount: number;
}

export const SubmitLog: React.FC<SubmitLogProps> = ({ children, uploadOnClick, fileCount }) => {
  return (
    <S.SubmitLogContainer>
      <S.SubmitTitleContainer>
        <S.SubmitTitle>업로드 파일 (총 {fileCount}개)</S.SubmitTitle>
        <S.SubmitDescription>등록된 업로드 예정 파일이에요</S.SubmitDescription>
      </S.SubmitTitleContainer>
      <S.FilesWrapper style={{ margin: "2.4rem 0", height: "31rem" }}>{children}</S.FilesWrapper>
      <Button onClick={uploadOnClick} fillWidth={true}>
        파일 업로드
      </Button>
    </S.SubmitLogContainer>
  );
};
