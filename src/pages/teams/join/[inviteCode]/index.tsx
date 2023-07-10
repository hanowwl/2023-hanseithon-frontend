import { useMemo } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { useQueryClient } from "@tanstack/react-query";

import { Team, TeamMemberPosition } from "src/apis";
import { Select } from "src/components/common";
import { TeamCard } from "src/components/teams";
import { keys, useJoinTeamMutation, useQueryParams, useTeamByInviteCodeQuery } from "src/hooks";
import { useModal } from "src/providers";
import { useModalStore } from "src/stores";

import * as S from "./styled";
import { default as TeamsPage } from "../../index";

export default function TeamsJoinPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { inviteCode } = useQueryParams<{ inviteCode: string }>();
  const { open, closeAll } = useModal();

  const { joinTeamModal, setModalState, resetModal } = useModalStore();

  const positionOptions = useMemo(
    () => [
      { value: "", label: "포지션을 선택해주세요" },
      ...Object.keys(TeamMemberPosition).map((key) => ({
        value: key,
        label: TeamMemberPosition[key as TeamMemberPosition],
      })),
    ],
    []
  );

  const handleOnClickOk = ({ name, inviteCode }: Team) => {
    if (joinTeamModal.position === "") return toast.warn("올바른 포지션을 선택해주세요");

    joinTeam(
      { inviteCode, position: joinTeamModal.position },
      {
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSuccess: async () => {
          await queryClient.refetchQueries({ queryKey: keys.auth.profile });
          toast.success(`${name} 팀 참여가 완료되었어요!`);
          resetModal("joinTeamModal");
          router.push("/teams/@me");
        },
        onError: (error) => {
          if (error.response?.data.message) toast.error(error.response.data.message);
          else toast.error("팀 참여 중 오류가 발생했어요. 잠시 뒤 다시 시도해주세요");
          resetModal("joinTeamModal");
          router.replace("/teams");
          closeAll();
        },
      }
    );
    closeAll();
  };

  const { mutate: joinTeam } = useJoinTeamMutation();
  const {} = useTeamByInviteCodeQuery(
    { inviteCode: inviteCode || "" },
    {
      enabled: !!inviteCode,
      onSuccess: (team) => {
        open({
          type: "confirm",
          title: `${team.name} 팀에 참여할까요?`,
          description: `참여하려는 팀의 정보가 맞는지 확인 후 결정해주세요`,
          labels: {
            ok: "참여하기",
            cancel: "뒤로가기",
          },
          children: (
            <S.RemovePaddingFromTeamCard>
              <TeamCard {...team} />

              <div style={{ marginTop: "1.6rem" }}>
                <Select
                  label="참여 포지션"
                  options={positionOptions}
                  value={joinTeamModal.position}
                  onChange={(e) => {
                    setModalState("joinTeamModal", {
                      position: e.target.value as TeamMemberPosition,
                    });
                  }}
                />
              </div>
            </S.RemovePaddingFromTeamCard>
          ),

          onClickOk: () => {
            handleOnClickOk(team);
          },
          onClickCancel: () => {
            resetModal("joinTeamModal");
            router.replace("/teams");
            closeAll();
          },
        });
      },
      onError: (error) => {
        if (error.response?.data.message) {
          resetModal("joinTeamModal");
          router.replace("/teams");
          return toast.error(error.response.data.message);
        }

        return toast.error("팀 정보를 불러오는 중 오류가 발생했어요");
      },
    }
  );

  return <TeamsPage />;
}
