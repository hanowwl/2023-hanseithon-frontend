import React, { useMemo } from "react";

import { TeamMember, TeamType } from "src/apis/services/teams/types";

import * as S from "./styled";

export interface TeamsProps {
  type: TeamType;
  name: string;
  description: string;
  members: TeamMember[];
}

export const TeamCard: React.FC<TeamsProps> = ({ type, name, description, members }) => {
  const leader = useMemo(() => members.find((member) => member.isLeader), [members]);
  const notLeader = useMemo(() => members.filter((member) => !member.isLeader), [members]);

  return (
    <S.TeamCardContainer>
      <S.TeamType>{TeamType[type]}</S.TeamType>

      <S.TeamName>{name}</S.TeamName>
      <S.TeamDescription>{description}</S.TeamDescription>

      <S.TeamMembersContainer>
        <S.TeamMemberListContainer>
          <S.TeamMemberTypeLabel>팀장</S.TeamMemberTypeLabel>
          <S.TeamMember>{leader?.name}</S.TeamMember>
        </S.TeamMemberListContainer>

        <S.TeamMemberListContainer>
          <S.TeamMemberTypeLabel>팀원</S.TeamMemberTypeLabel>
          {notLeader.map((member, i, arr) => {
            const isLastMember = arr.length - 1 === i;

            return (
              <React.Fragment key={i}>
                <S.TeamMember>{member.name}</S.TeamMember>
                {!isLastMember && <span> · </span>}
              </React.Fragment>
            );
          })}
        </S.TeamMemberListContainer>
      </S.TeamMembersContainer>
    </S.TeamCardContainer>
  );
};
