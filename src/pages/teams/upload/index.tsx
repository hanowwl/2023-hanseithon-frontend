import React, { Suspense, useCallback, useEffect, useState } from "react";

import { SuspenseFallback } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { SubmitLog, SubmitTrack } from "src/components/submit";

import * as S from "./styled";

export interface FileSubmitProps {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
}

export default function UploadPage() {
  //업로드할 예비 공간이 있고 그 공간에 있는 파일을
  //리스트로 가지고 온다.
  //리스트에 있는 파일들을 버튼을 클릭했을 때 backend로 보낸다?
  const [fileArray, setFileArray] = useState<FileSubmitProps[]>([]);
  const [fileInfo, setFileInfo] = useState<FileSubmitProps>({});
  const onTrackFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFileInfo(e.target.files[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const uploadOnClick = () => {
    setFileArray((prevFileArray) => [fileInfo, ...prevFileArray]);
  };
  return (
    <TeamLayout>
      <S.FileUploadContainer>
        <SubmitLog fileCount={fileArray.length} uploadOnClick={uploadOnClick}>
          <Suspense fallback={<SuspenseFallback />}>
            {fileArray.map((file, i) => (
              <S.FileList key={i}>
                <S.FileDetailContainer>
                  <S.FileNameAndSize>
                    <S.FileName>{file.name}</S.FileName>
                    <S.FileSize>({file.size})</S.FileSize>
                  </S.FileNameAndSize>
                  <S.FilePathname>어쩌고</S.FilePathname>
                </S.FileDetailContainer>
              </S.FileList>
            ))}
          </Suspense>
        </SubmitLog>
        <S.UploadInputContainer>
          <SubmitTrack onUploadFile={onTrackFile} />
        </S.UploadInputContainer>
      </S.FileUploadContainer>
    </TeamLayout>
  );
}
