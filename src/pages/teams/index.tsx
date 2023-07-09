/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useEffect, useState } from "react";

import { TeamsLayout } from "src/components/layouts";
import { NewUser, NewTeam } from "src/components/teams";

import * as S from "./styled";
import { AllUserResponse, getTeams, getUsers, Team } from "../../api/user";

export default function TeamsPage() {
  const [teamsState, setTeamsState] = useState<Team[]>([
    {
      type: "",
      name: "",
      description: "",
      members: [
        {
          isLeader: false,
          position: "",
          name: "",
          profileUrl: "",
        },
      ],
    },
  ]);
  const [userState, setUserState] = useState<AllUserResponse[]>([
    {
      name: "",
      position: "",
      student: {
        department: "",
        grade: 0,
      },
      profileUrl: null,
      createdAt: "",
    },
  ]);
  useEffect(() => {
    getTeams().then((res) => {
      setTeamsState(res);
    });
    getUsers().then((res) => {
      setUserState(res);
    });
  }, []);
  return (
    <TeamsLayout>
      <S.TeamsBanner></S.TeamsBanner>
      <S.TeamsTitle>새로 참여한 메이커</S.TeamsTitle>
      <S.TeamsDescription>한세톤에 참여한 메이커들을 환영해주세요!</S.TeamsDescription>
      <S.NewMakerContainer>
        {userState.map((user, i) => (
          <NewUser
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
        {teamsState.map((team, i) => (
          <NewTeam
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
