import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

import { SuspenseFallback, Button } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { SubmitLog, UploadTrack } from "src/components/upload";
import { MAC_FILE_TYPE, WINDOW_FILE_TYPE } from "src/constants";
import { useFileUploadMutation, useProfileQuery } from "src/hooks";
import { getByteSize } from "src/utils";

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
  const [fileInfo, setFileInfo] = useState<FileSubmitProps[]>([]);

  const { data: user } = useProfileQuery();
  const uploadMutation = useFileUploadMutation();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const isUserHasTeam = useMemo(() => user?.teamMember, [user]);

  const onTrackFile = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const uploadFile = event.target.files[0];
    if ((uploadFile && uploadFile.type === MAC_FILE_TYPE) || WINDOW_FILE_TYPE) {
      setFileInfo([uploadFile]);
    } else toast.error("업로드 하지 못하는 파일 유형이에요 😞");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnUpload: SubmitHandler<FileSubmitProps> = (formValue) => {
    if (!isUserHasTeam) toast.error("유저 정보 또는 소속된 팀이 없어요 😞");

    if (fileInfo[0].name === undefined) toast.error("파일을 등록해주세요 😞");

    if (fileInfo[0].type !== MAC_FILE_TYPE || WINDOW_FILE_TYPE)
      toast.error("업로드 하지 못하는 파일 유형이에요 😞");
    uploadMutation.mutate(formValue, {
      onSuccess: () => {
        toast.success("파일 제출에 성공하셨습니다 😎");
      },
      onError: () => {
        toast.error("파일 제출에 실패했어요 😞");
      },
    });
    if (inputRef.current) {
      inputRef.current.value = "";
      setFileInfo([]);
    }
  };
  const fileHandler = (files: FileList | null): void => {
    if (files === null) return;
    const uploadFiles = Array.from(files);
    const supportedFiles = uploadFiles.filter(
      (file) => file.type === "application/x-zip-compressed"
    );

    if (supportedFiles.length > 0) {
      setFileInfo(supportedFiles);
    } else {
      toast.error("업로드 하지 못하는 파일 유형이에요 😞");
    }
  };
  return (
    <TeamLayout>
      <S.FileUploadContainer>
        <form style={{ width: "100%", display: "flex" }} encType="multipart/form-data">
          <SubmitLog
            ButtonNode={
              <Button type="button" fillWidth={true} onClick={() => handleOnUpload(fileInfo[0])}>
                파일 업로드
              </Button>
            }
          >
            <Suspense fallback={<SuspenseFallback />}>
              <S.FileList>
                <S.FileDetailContainer>
                  <S.FileNameAndSize>
                    <S.FileName>{fileInfo[0]?.name}</S.FileName>
                    <S.FileSize>
                      {fileInfo[0]?.name !== undefined
                        ? `(${
                            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                            getByteSize(fileInfo[0]?.size)
                          })`
                        : null}
                    </S.FileSize>
                  </S.FileNameAndSize>
                  <S.FilePathname>{fileInfo[0]?.type}</S.FilePathname>
                </S.FileDetailContainer>
              </S.FileList>
            </Suspense>
          </SubmitLog>
          <S.UploadInputContainer>
            <FileDrop onDrop={(f) => fileHandler(f)}>
              <UploadTrack ref={inputRef} id="ex_file" type="file" onChange={onTrackFile} />
            </FileDrop>
          </S.UploadInputContainer>
        </form>
      </S.FileUploadContainer>
    </TeamLayout>
  );
}
