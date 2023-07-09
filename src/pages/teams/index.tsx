import { TeamLayout } from "src/components/layouts";
import { TeamMemberCard, TeamCard, TeamSection } from "src/components/teams";
import { useAllTeamMembersQuery, useAllTeamsQuery } from "src/hooks/queries/teams";

import * as S from "./styled";

export default function TeamsPage() {
  const { data: members } = useAllTeamMembersQuery();
  const { data: teams } = useAllTeamsQuery();

  if (!teams || !members) return <div />;

  return (
    <TeamLayout>
      <TeamSection
        title="새로 참여한 메이커"
        description="한세톤에 참여한 메이커들을 환영해주세요!"
      >
        <S.NewMakerContainer>
          {members.map(({ name, position, student, profileUrl, createdAt }, i) => (
            <TeamMemberCard
              key={i}
              username={name}
              position={position}
              student={student}
              profileUrl={profileUrl}
              createdAt={createdAt}
            />
          ))}
        </S.NewMakerContainer>
      </TeamSection>

      <TeamSection
        title="현재까지 참여한 팀"
        description="현재까치 한세톤에 참여 신청한 전체 팀 리스트에요<"
      >
        <S.TeamsContainer>
          {teams.map(({ type, name, description, members }, i) => (
            <TeamCard key={i} type={type} name={name} description={description} members={members} />
          ))}
        </S.TeamsContainer>
      </TeamSection>
    </TeamLayout>
  );
}
