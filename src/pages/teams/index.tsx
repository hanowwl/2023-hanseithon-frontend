import { Suspense, useMemo } from "react";
import { toast } from "react-toastify";

import { useRouter } from "next/router";

import { CreateTeamParameters, TeamMemberPosition, TeamType } from "src/apis";
import { Input, Select, SuspenseFallback } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { TeamMemberCard, TeamCard, TeamSection } from "src/components/teams";
import { useProfileQuery } from "src/hooks";
import {
  useAllTeamMembersQuery,
  useAllTeamsQuery,
  useCreateTeamMutation,
} from "src/hooks/queries/teams";
import { useModal } from "src/providers";
import { useModalStore } from "src/stores";

import * as S from "./styled";

const NewMakerSectionContent: React.FC = () => {
  const { data: members } = useAllTeamMembersQuery({ suspense: true });

  return (
    <S.NewMakerListContainer>
      {members?.map(({ name, position, student, profileUrl, createdAt }, i) => (
        <TeamMemberCard
          key={i}
          username={name}
          position={position}
          student={student}
          profileUrl={profileUrl}
          createdAt={createdAt}
        />
      ))}
    </S.NewMakerListContainer>
  );
};

const AllTeamsSectionContent: React.FC = () => {
  const { data: teams } = useAllTeamsQuery({ suspense: true });

  return (
    <S.TeamsGridContainer>
      {teams?.map(({ type, name, description, members }, i) => (
        <TeamCard key={i} type={type} name={name} description={description} members={members} />
      ))}
    </S.TeamsGridContainer>
  );
};

const CreateTeamForm: React.FC = () => {
  const { createTeamModal, setModalState } = useModalStore();

  const typeOptions = useMemo(
    () => [
      { value: "", label: "포지션을 선택해주세요" },
      ...Object.keys(TeamType).map((key) => ({
        value: key,
        label: TeamType[key as TeamType],
      })),
    ],
    []
  );

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

  return (
    <S.CreateTeamModalInputContainer>
      <Select
        label="팀 유형"
        options={typeOptions}
        value={createTeamModal.type}
        onChange={(e) =>
          setModalState("createTeamModal", { type: e.target.value as TeamType | "" })
        }
      />
      <Input
        label="팀명"
        value={createTeamModal.name}
        onChange={(e) => setModalState("createTeamModal", { name: e.target.value })}
      />
      <Input
        label="팀 설명"
        value={createTeamModal.description}
        onChange={(e) => setModalState("createTeamModal", { description: e.target.value })}
      />
      <Select
        label="참여 포지션"
        options={positionOptions}
        value={createTeamModal.position}
        onChange={(e) =>
          setModalState("createTeamModal", { position: e.target.value as TeamMemberPosition | "" })
        }
      />
    </S.CreateTeamModalInputContainer>
  );
};

export default function TeamsPage() {
  const router = useRouter();
  const { data: profile, refetch: refetchProfile } = useProfileQuery();

  const { open, closeAll } = useModal();
  const { createTeamModal, resetModal } = useModalStore();
  const { mutate: createTeam } = useCreateTeamMutation();

  const handleOnClickOk = () => {
    if (createTeamModal.type === "") return toast.warn("올바른 팀 유형을 선택해주세요");
    else if (createTeamModal.name.length < 2 || createTeamModal.name.length > 30)
      return toast.warn("팀명은 최소 2자, 최대 30자까지 입력할 수 있어요");
    else if (createTeamModal.position === "")
      return toast.warn("올바른 참여 포지션을 선택해주세요");

    createTeam(createTeamModal as CreateTeamParameters, {
      onSuccess: () => {
        resetModal("createTeamModal");
        toast.success("팀 생성이 완료되었어요");
        refetchProfile();
        router.push("/teams/@me");
        closeAll();
      },
      onError: (error) => {
        if (error.response?.data.message) return toast.error(error.response.data.message);
        return toast.error("팀 생성 중 오류가 발생했어요. 잠시 뒤 다시 시도해주세요");
      },
    });
  };

  const handleOnCreateTeam = () => {
    open({
      type: "confirm",
      title: "팀 생성하기",
      description: "아래 팀 정보를 입력해주세요",
      children: <CreateTeamForm />,
      labels: {
        ok: "팀 생성하기",
        cancel: "취소",
      },
      onClickOk: () => {
        handleOnClickOk();
      },
      onClickCancel: () => {
        closeAll();
        resetModal("createTeamModal");
      },
    });
  };

  return (
    <TeamLayout>
      <S.TeamSectionsContainer>
        <TeamSection
          title="새로 참여한 메이커"
          description="한세톤에 참여한 메이커들을 환영해주세요!"
        >
          <Suspense fallback={<SuspenseFallback />}>
            <NewMakerSectionContent />
          </Suspense>
        </TeamSection>

        <TeamSection
          title="현재까지 참여한 팀"
          description="현재까치 한세톤에 참여 신청한 전체 팀 리스트에요"
          actions={
            !profile?.teamMember ? [{ children: "팀 생성하기", onClick: handleOnCreateTeam }] : []
          }
        >
          <Suspense fallback={<SuspenseFallback />}>
            <AllTeamsSectionContent />
          </Suspense>
        </TeamSection>
      </S.TeamSectionsContainer>
    </TeamLayout>
  );
}
