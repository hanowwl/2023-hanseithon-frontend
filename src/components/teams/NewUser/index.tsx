import React from "react";

import { departmentTranslations, gradeIcons, positionTranslations } from "src/constants/teams";

import * as S from "./styled";

export interface NewUserProps {
  username: string;
  position: string;
  student: {
    department: string;
    grade: number;
  };
  profileUrl: string | null;
  createdAt?: string;
}

export const NewUser: React.FC<NewUserProps> = ({ username, student, position }) => {
  const gradeDecide = () => {
    const { grade } = student;
    return `${gradeIcons[grade]}${grade}학년`;
  };

  const translateDepartment = () => {
    const { department } = student;
    return departmentTranslations[department] || department;
  };

  const translatePosition = () => {
    return positionTranslations[position] || position;
  };

  const renderGradeIcon = () => {
    const gradeIcon = gradeDecide();
    return (
      <S.UserInformationTagWrapper>
        <S.UserInformationTag>#{gradeIcon}</S.UserInformationTag>
      </S.UserInformationTagWrapper>
    );
  };

  const renderDepartmentIcon = () => {
    const translatedDepartment = translateDepartment();
    return (
      <S.UserInformationTagWrapper>
        <S.UserInformationTag>#{translatedDepartment}</S.UserInformationTag>
      </S.UserInformationTagWrapper>
    );
  };

  const renderPositionIcon = () => {
    const translatedPosition = translatePosition();
    return (
      <S.UserInformationTagWrapper>
        <S.UserInformationTag>#{translatedPosition}</S.UserInformationTag>
      </S.UserInformationTagWrapper>
    );
  };

  return (
    <S.NewUserElement>
      <S.UserContainer>
        <S.UsersProfilePicture />
        <S.UserInfoContainer>
          <S.UserName>{username}</S.UserName>
          <S.UserInformationContainer>
            {renderGradeIcon()}
            {renderDepartmentIcon()}
            {renderPositionIcon()}
          </S.UserInformationContainer>
        </S.UserInfoContainer>
      </S.UserContainer>
    </S.NewUserElement>
  );
};
