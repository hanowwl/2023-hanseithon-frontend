import React, { InputHTMLAttributes } from "react";

import * as S from "./styled";

type UploadTrackProps = InputHTMLAttributes<HTMLInputElement>;

const UploadTrack = React.forwardRef<HTMLInputElement, UploadTrackProps>(({ ...options }, ref) => (
  <S.UploadTrack>
    <label htmlFor="ex_file">
      <S.UploadText>
        파일을 이 곳에 드래그하거나, 클릭해 업로드할 파일을 선택해주세요 <br />
        (zip 파일로 업로드해주세요.)
      </S.UploadText>
    </label>
    <input ref={ref} {...options} />
  </S.UploadTrack>
));

UploadTrack.displayName = "Upload Track";

export { UploadTrack };
