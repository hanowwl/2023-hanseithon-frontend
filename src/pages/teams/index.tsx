/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";

import { TeamsLayout } from "src/components/layouts";
import { TeamMemberCard, TeamCard } from "src/components/teams";
import { useUsersQuery, useTeamsQuery } from "src/hooks/queries/teams";

import * as S from "./styled";

export default function TeamsPage() {
  const { data: userState, isLoading: userLoading } = useUsersQuery();
  const { data: teams, isLoading: teamLoading } = useTeamsQuery();
  if (userLoading || !teams || !userState) return <div />;
  return (
    <TeamsLayout>
      <S.TeamsTitle>새로 참여한 메이커</S.TeamsTitle>
      <S.TeamsDescription>한세톤에 참여한 메이커들을 환영해주세요!</S.TeamsDescription>
      <S.NewMakerContainer>
        {userLoading
          ? null
          : userState.map((user, i) => (
              <TeamMemberCard
                key={i}
                username={user.name}
                position={user.position}
                student={user.student}
                profileUrl={user.profileUrl}
                createdAt={user.createdAt}
              />
            ))}
      </S.NewMakerContainer>
      <S.TeamsTitle>현재까지 참여한 팀</S.TeamsTitle>
      <S.TeamsDescription>현재까치 한세톤에 참여 신청한 전체 팀 리스트에요</S.TeamsDescription>
      <S.TeamsContainer>
        {teamLoading
          ? null
          : teams.map((team, i) => (
              <TeamCard
                key={i}
                type={team.type}
                name={team.name}
                description={team.description}
                members={team.members}
              />
            ))}
      </S.TeamsContainer>
    </TeamsLayout>
  );
}
