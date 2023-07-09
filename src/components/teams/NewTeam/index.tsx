import React from "react";

import { TeamType } from "src/constants/teams";

import * as S from "./styled";

export interface TeamsProps {
  type: string;
  name: string;
  description: string;
  members: {
    isLeader: boolean;
    position: string;
    name: string;
    profileUrl: string;
  }[];
}

export const NewTeam: React.FC<TeamsProps> = ({ type, name, description, members }) => {
  //영문으로 되어있는 데이터를 한글로
  const TranslateTeamType = () => {
    return `${TeamType[type]}`;
  };

  //팀장 이름 렌더링
  const renderMembers = () => {
    return members.map((member, i) => {
      if (member.isLeader) {
        return (
          <S.TeamLeader key={i}>
            <S.TeamPosition>팀장</S.TeamPosition>
            <S.TeamMember>{member.name}</S.TeamMember>
          </S.TeamLeader>
        );
      } else {
        return null;
      }
    });
  };

  //팀장이 아닌 외에 멤버들
  const renderOtherMembers = () => {
    return members
      .filter((member) => !member.isLeader)
      .map((member, i) => {
        return (
          <React.Fragment key={i}>
            {i > 0 && " · "}
            {member.name}
          </React.Fragment>
        );
      });
  };

  return (
    <S.TeamElement>
      <S.TeamInformation>
        <S.TeamType>
          <S.TeamTypeText>{TranslateTeamType()}</S.TeamTypeText>
        </S.TeamType>
        <S.TeamName>{name}</S.TeamName>
        <S.TeamDescription>{description}</S.TeamDescription>
        <S.TeamPositionContainer>
          {renderMembers()}
          <S.TeamMembers>
            <S.TeamPosition>팀원</S.TeamPosition>
            <S.TeamMember>{renderOtherMembers()}</S.TeamMember>
          </S.TeamMembers>
        </S.TeamPositionContainer>
      </S.TeamInformation>
    </S.TeamElement>
  );
};
