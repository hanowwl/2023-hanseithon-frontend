import React from "react";

import * as S from "./styled";

export interface UploadTrackProps {
  onUploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.MutableRefObject<HTMLInputElement | null>;
}

export const UploadTrack: React.FC<UploadTrackProps> = ({ onUploadFile, ref }) => {
  return (
    <S.UploadTrack>
      <label htmlFor="ex_file">
        <S.UploadText>
          파일을 이 곳에 드래그하거나, 클릭해 업로드할 파일을 선택해주세요 <br />
          (zip 파일로 업로드해주세요.)
        </S.UploadText>
      </label>
      <input ref={ref} id="ex_file" type="file" onChange={onUploadFile} />
    </S.UploadTrack>
  );
};
