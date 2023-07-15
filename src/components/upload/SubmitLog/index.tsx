import React from "react";

import { Button } from "src/components/common";

import * as S from "./styled";

export interface SubmitLogProps {
  children?: React.ReactNode;
  fileCount: number;
  ButtonNode: React.ReactNode;
}

export const SubmitLog: React.FC<SubmitLogProps> = ({ children, fileCount, ButtonNode }) => {
  return (
    <S.SubmitLogContainer>
      <S.SubmitTitleContainer>
        <S.SubmitTitle>업로드 파일 (총 {fileCount}개)</S.SubmitTitle>
        <S.SubmitDescription>등록된 업로드 예정 파일이에요</S.SubmitDescription>
      </S.SubmitTitleContainer>
      <S.FilesWrapper style={{ margin: "2.4rem 0", height: "31rem" }}>{children}</S.FilesWrapper>
      {ButtonNode}
    </S.SubmitLogContainer>
  );
};
