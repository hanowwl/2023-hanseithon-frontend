import { Suspense } from "react";

import { SuspenseFallback } from "src/components/common";
import { TeamLayout } from "src/components/layouts";
import { TeamMemberCard, TeamCard, TeamSection } from "src/components/teams";
import { useAllTeamMembersQuery, useAllTeamsQuery } from "src/hooks/queries/teams";

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

export default function TeamsPage() {
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
        >
          <Suspense fallback={<SuspenseFallback />}>
            <AllTeamsSectionContent />
          </Suspense>
        </TeamSection>
      </S.TeamSectionsContainer>
    </TeamLayout>
  );
}
