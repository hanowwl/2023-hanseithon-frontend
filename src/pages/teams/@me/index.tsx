import { TeamsLayout } from "src/components/layouts";
import { TeamSection } from "src/components/teams";
import { useMyTeamQuery } from "src/hooks";

import * as S from "./styled";

export default function MyTeamPage() {
  const { data: team, isLoading } = useMyTeamQuery({ onSuccess: (data) => console.log(data) });

  if (isLoading || !team) return <div />;

  return (
    <TeamsLayout>
      <TeamSection
        title={`${team.name} 팀`}
        description={`한세톤에 참여한 ${team.name} 팀을 환영해요!`}
        actions={[
          { children: "프로필 수정" },
          { children: "초대코드 복사" },
          { children: "팀 탈퇴하기", variant: "danger" },
        ]}
      />

      <S.TeamLogSectionsGridContainer>
        <TeamSection title="팀 활동 로그" description="팀 내 활동 로그들을 확인해보세요" />
        <TeamSection
          title="파일 제출 내역"
          description="한세톤 진행 중 제출한 파일을 확인할 수 있어요"
        />
        <TeamSection
          title="경고 내역"
          description="한세톤 진행 중 운영진 측에 받은 경고를 확인할 수 있어요"
        />
      </S.TeamLogSectionsGridContainer>
    </TeamsLayout>
  );
}
