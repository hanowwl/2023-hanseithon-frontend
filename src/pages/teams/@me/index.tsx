/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { Suspense, useState } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import dayjs from "dayjs";

import { TeamLogType } from "src/apis";
import { Button, SuspenseFallback } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { TeamLogMessage, TeamSection, TeamMemberCard } from "src/components/teams";
import { ENV } from "src/constants";
import {
  useLeaveTeamMutation,
  useMyTeamAllLogsQuery,
  useMyTeamQuery,
  useProfileQuery,
} from "src/hooks";
import { useDeleteMyTeamMutation } from "src/hooks/queries/teams/useDeleteMyTeamMutation";
import { useDownloadFile } from "src/hooks/queries/teams/useDownloadFile";
import { useGetFiles } from "src/hooks/queries/teams/useGetFiles";

import * as S from "./styled";
import {
  FileDetailContainer,
  FileName,
  FileNameAndSize,
  FilePathname,
  FileSize,
} from "./upload/styled";

const TeamMembersSection: React.FC = () => {
  const router = useRouter();

  const { data: profile } = useProfileQuery();
  const { data: team } = useMyTeamQuery({ suspense: true });
  const { mutate: leaveTeam } = useLeaveTeamMutation();
  const { mutate: deleteTeam } = useDeleteMyTeamMutation();
  const handleOnClickCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(`${ENV.HOSTNAME}/teams/join/${team?.inviteCode}`);
      toast.success("초대코드가 클립보드에 복사되었어요");
    } catch (error) {
      toast.error("초대코드를 클립보드에 복사하는데 실패했어요 ");
    }
  };

  const handleOnClickLeaveTeam = () => {
    const willLeaveTeam = confirm("정말 팀을 탈퇴하실건가요?");
    if (!willLeaveTeam) return toast.info("팀 탈퇴가 취소되었어요");

    router.push("/teams");
    leaveTeam(undefined, {
      onSuccess: () => {
        toast.success("팀 탈퇴가 완료되었어요");
      },
      onError: (error) => {
        if (error.response?.data.message) return toast.error(error.response.data.message);
        return toast.error("팀 탈퇴 중 오류가 발생했어요. 잠시 뒤 다시 시도해주세요");
      },
    });
  };

  const handleOnClickDeleteTeam = () => {
    const willDeleteTeam = confirm("정말 팀을 삭제하실건가요?");
    if (!willDeleteTeam) return toast.info("팀 삭제가 취소되었어요");

    router.push("/teams");
    deleteTeam(undefined, {
      onSuccess: () => {
        toast.success("팀 삭제가 완료되었어요");
      },
      onError: (error) => {
        if (error.response?.data.message) return toast.error(error.response.data.message);
        return toast.error("팀 삭제 중 오류가 발생했어요. 잠시 뒤 다시 시도해주세요");
      },
    });
  };

  return (
    <TeamSection
      title={`${team?.name} 팀`}
      description={`한세톤에 참여한 ${team?.name} 팀을 환영해요!`}
      actions={[
        // { children: "프로필 수정" },
        { children: "초대코드 복사", onClick: handleOnClickCopyToClipboard },
        profile?.teamMember?.isLeader
          ? { children: "팀 삭제하기", variant: "danger", onClick: handleOnClickDeleteTeam }
          : { children: "팀 탈퇴하기", variant: "danger", onClick: handleOnClickLeaveTeam },
      ]}
    >
      <S.TeamMembersListContainer>
        {team?.members.map((user, i) => {
          return (
            <TeamMemberCard
              key={i}
              username={user.name}
              position={user.position}
              student={user.student}
              profileUrl={user.profileUrl}
              createdAt={user.createdAt}
            />
          );
        })}
      </S.TeamMembersListContainer>
    </TeamSection>
  );
};

const TeamLogSectionContent: React.FC = () => {
  const { data: team } = useMyTeamQuery({ suspense: true });
  const { data: logs } = useMyTeamAllLogsQuery({ suspense: true });

  return (
    <TeamLogMessage.List>
      {logs?.map(({ id, type, memberName, actionedAt }) => {
        const actionAt = dayjs(actionedAt);

        if (type === TeamLogType.TEAM_CREATED)
          return (
            <ul>
              <TeamLogMessage
                key={id}
                message={
                  <>
                    {memberName}님이 팀{" "}
                    <TeamLogMessage.Highlighter>{team?.name}</TeamLogMessage.Highlighter>을(를)
                    생성했어요
                  </>
                }
                actionAt={actionAt}
              />
            </ul>
          );
        else if (type === TeamLogType.TEAM_JOINED)
          return (
            <ul>
              <TeamLogMessage
                key={id}
                message={
                  <>
                    {memberName}님이 팀{" "}
                    <TeamLogMessage.Highlighter>{team?.name}</TeamLogMessage.Highlighter>에
                    참여했어요
                  </>
                }
                actionAt={actionAt}
              />
            </ul>
          );
        else if (type === TeamLogType.TEAM_LEFT)
          return (
            <ul>
              <TeamLogMessage
                key={id}
                message={
                  <>
                    {memberName}님이 팀{" "}
                    <TeamLogMessage.Highlighter variant="danger">
                      {team?.name}
                    </TeamLogMessage.Highlighter>
                    에서 탈퇴했어요{" "}
                  </>
                }
                actionAt={actionAt}
              />
            </ul>
          );

        return <></>;
      })}
    </TeamLogMessage.List>
  );
};

const getByteSize = (size: number) => {
  const byteUnits = ["KB", "MB", "GB", "TB"];

  for (let i = 0; i < byteUnits.length; i++) {
    size = Math.floor(size / 1024);

    if (size < 1024) return size.toFixed(1) + byteUnits[i];
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

export default function MyTeamPage() {
  const { data: files } = useGetFiles();

  return (
    <TeamLayout>
      <Suspense fallback={<SuspenseFallback />}>
        <TeamMembersSection />
      </Suspense>

      <S.TeamLogSectionsGridContainer>
        <TeamSection title="팀 활동 로그" description="팀 내 활동 로그들을 확인해보세요">
          <Suspense fallback={<SuspenseFallback />}>
            <TeamLogSectionContent />
          </Suspense>
        </TeamSection>

        <TeamSection
          title="파일 제출 내역"
          description="한세톤 진행 중 제출한 파일을 확인할 수 있어요"
        >
          {files?.map((data, i) => (
            <div key={i} style={{ display: "flex" }}>
              <FileDetailContainer style={{ marginBottom: "2.4rem" }}>
                <FileNameAndSize>
                  <FileName>{data.name}</FileName>
                  <FileSize>({getByteSize(data.size)})</FileSize>
                </FileNameAndSize>
                <FilePathname>{formatDate(data.uploadedAt)}</FilePathname>
              </FileDetailContainer>
              <Button style={{ margin: "0 0 auto auto" }}>파일 다운로드</Button>
            </div>
          ))}
        </TeamSection>

        <TeamSection
          title="경고 내역"
          description="한세톤 진행 중 운영진 측에 받은 경고를 확인할 수 있어요"
        />
      </S.TeamLogSectionsGridContainer>
    </TeamLayout>
  );
}
