import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";

import { fileUpload } from "src/apis/services/teams";
import { SuspenseFallback, Button } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { SubmitLog, UploadTrack } from "src/components/upload";
import { useProfileQuery } from "src/hooks";

import * as S from "./styled";

export interface FileSubmitProps {
  lastModified?: number;
  lastModifiedDate?: Date;
  name?: string;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
}

const getByteSize = (size?: number) => {
  const byteUnits = ["KB", "MB", "GB", "TB"];
  if (size) {
    for (let i = 0; i < byteUnits.length; i++) {
      size = Math.floor(size / 1024);

      if (size < 1024) return size.toFixed(1) + byteUnits[i];
    }
  }
};

export default function UploadPage() {
  //업로드할 예비 공간이 있고 그 공간에 있는 파일을
  //리스트로 가지고 온다.
  //리스트에 있는 파일들을 버튼을 클릭했을 때 backend로 보낸다?
  const [fileInfo, setFileInfo] = useState<FileSubmitProps>({});
  const { data: user } = useProfileQuery();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isUserHasTeam = useMemo(() => user?.teamMember, [user]);
  const onTrackFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFileInfo(e.target.files[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnUpload = () => {
    if (!isUserHasTeam) {
      return toast.error("유저 정보 또는 소속된 팀이 없어요 😞", {
        autoClose: 3000,
      });
    }
    if (fileInfo.name === undefined) {
      return toast.error("파일을 등록해주세요 😞", {
        autoClose: 3000,
      });
    }
    if (fileInfo.type !== "application/x-zip-compressed") {
      return toast.error("업로드 하지 못하는 파일 유형이에요 😞", {
        autoClose: 3000,
      });
    }
    fileUpload(fileInfo)
      .then(() => {
        toast.success("파일 제출에 성공하셨습니다 😎", {
          autoClose: 3000,
        });
      })
      .catch(() => {
        toast.error("파일 제출에 실패했어요 😞", {
          autoClose: 3000,
        });
      });
    if (inputRef.current) {
      inputRef.current.value = "";
      setFileInfo({});
    }
  };
  return (
    <TeamLayout>
      <S.FileUploadContainer>
        <SubmitLog uploadOnClick={handleOnUpload}>
          <Suspense fallback={<SuspenseFallback />}>
            <S.FileList>
              <S.FileDetailContainer>
                <S.FileNameAndSize>
                  <S.FileName>{fileInfo?.name}</S.FileName>
                  <S.FileSize>
                    {fileInfo.name !== undefined
                      ? `(${
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          getByteSize(fileInfo?.size)
                        })`
                      : null}
                  </S.FileSize>
                </S.FileNameAndSize>
                <S.FilePathname>{fileInfo?.type}</S.FilePathname>
              </S.FileDetailContainer>
            </S.FileList>
          </Suspense>
        </SubmitLog>
        <S.UploadInputContainer>
          <UploadTrack ref={inputRef} onUploadFile={onTrackFile} />
        </S.UploadInputContainer>
      </S.FileUploadContainer>
    </TeamLayout>
  );
}
