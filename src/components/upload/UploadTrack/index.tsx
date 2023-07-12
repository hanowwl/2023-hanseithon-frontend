import React from "react";

import * as S from "./styled";

export interface UploadTrackProps {
  onUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UploadTrack: React.FC<UploadTrackProps> = ({ onUploadFile }) => {
  return (
    <S.UploadTrack>
      <label htmlFor="ex_file">
        <S.UploadText>
          파일을 이 곳에 드래그하거나, 클릭해 업로드할 파일을 선택해주세요
        </S.UploadText>
      </label>
      <input id="ex_file" type="file" onChange={onUploadFile} />
    </S.UploadTrack>
  );
};
