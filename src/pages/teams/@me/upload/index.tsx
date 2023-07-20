import React, { useRef, useState } from "react";
import { FileDrop } from "react-file-drop";
import { Id, toast } from "react-toastify";

import { useRouter } from "next/router";

import { Button, Spinner } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { SubmitLog, UploadTrack } from "src/components/upload";
import { ALLOW_UPLOAD_FILE_TYPES } from "src/constants";
import { useFileUploadMutation } from "src/hooks";
import { getByteSize } from "src/utils";

import * as S from "./styled";

const FileUploadProgressToast: React.FC<{ progress: number; message?: string }> = ({
  progress,
  message = "파일 업로드 중이에요",
}) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
    <Spinner size="1.6rem" /> {message} ({progress.toFixed(0)}%)
  </div>
);

export default function UploadPage() {
  const router = useRouter();
  const toastId = useRef<Id | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const { mutate: fileUploadMutate } = useFileUploadMutation();

  const handleOnTargetClick = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const handleOnChangeFile = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    if (files.length > 1) return toast.warn("한 번에 1개의 .zip 확장자 파일만 업로드할 수 있어요");
    if (!ALLOW_UPLOAD_FILE_TYPES.includes(files[0].type))
      return toast.warn(".zip 확장자 파일만 업로드할 수 있어요");

    setUploadFile(files[0]);
  };

  const handleOnClickUpload = () => {
    if (!uploadFile) return toast.warn("업로드할 파일을 선택해주세요");

    toastId.current = toast(<FileUploadProgressToast progress={0} />, { autoClose: false });
    fileUploadMutate(
      {
        file: uploadFile,
        onUploadProgress: ({ loaded, total }) => {
          if (!toastId.current) return;
          const progress = (loaded * 100) / (total ?? 0);

          toast.update(toastId.current, {
            render: (
              <FileUploadProgressToast
                progress={progress}
                message={progress >= 100 ? "파일 처리 중이에요" : undefined}
              />
            ),
          });
        },
      },
      {
        onSuccess: () => {
          if (!toastId.current) return;
          toast.update(toastId.current, {
            render: "파일 업로드가 완료되었어요",
            autoClose: 3000,
            type: toast.TYPE.SUCCESS,
          });
          router.push("/teams/@me");
        },
        onError: (error) => {
          if (!toastId.current) return;
          toast.update(toastId.current, {
            render:
              error.response?.data.message ||
              "파일 업로드 중 오류가 발생했어요. 잠시 뒤 다시 시도해주세요",
            autoClose: 3000,
            type: toast.TYPE.ERROR,
          });
        },
      }
    );
  };

  return (
    <TeamLayout>
      <S.FileUploadContainer>
        <form style={{ width: "100%", display: "flex" }} encType="multipart/form-data">
          <SubmitLog
            ButtonNode={
              <Button
                type="button"
                fillWidth={true}
                disabled={!uploadFile}
                onClick={handleOnClickUpload}
              >
                {uploadFile ? "파일 업로드" : "파일을 선택해주세요"}
              </Button>
            }
          >
            <S.FileList>
              {uploadFile && (
                <S.FileDetailContainer>
                  <S.FileNameAndSize>
                    <S.FileName>{uploadFile.name}</S.FileName>
                    <S.FileSize>({getByteSize(uploadFile?.size)})</S.FileSize>
                  </S.FileNameAndSize>
                  <S.FilePathname>{uploadFile.type}</S.FilePathname>
                </S.FileDetailContainer>
              )}
            </S.FileList>
          </SubmitLog>

          <S.UploadInputContainer>
            <FileDrop onDrop={handleOnChangeFile} onTargetClick={handleOnTargetClick}>
              <UploadTrack
                ref={fileInputRef}
                type="file"
                onChange={({ target: { files } }) => handleOnChangeFile(files)}
                multiple={false}
                accept=".zip"
              />
            </FileDrop>
          </S.UploadInputContainer>
        </form>
      </S.FileUploadContainer>
    </TeamLayout>
  );
}
