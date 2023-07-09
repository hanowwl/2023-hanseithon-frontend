import React from "react";

import { Button, ButtonProps } from "src/components/common";

import * as S from "./styled";

export interface TeamSectionProps {
  title: string;
  description: string;
  actions?: Omit<ButtonProps, "size">[];
  children?: React.ReactNode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  description,
  actions,
  children,
}) => {
  return (
    <S.TeamSection>
      <S.TeamSectionHeader>
        <div>
          <S.TeamSectionTitle>{title}</S.TeamSectionTitle>
          <S.TeamSectionDescription>{description}</S.TeamSectionDescription>
        </div>
        <S.TeamSectionActionsContainer>
          {actions?.map((props, i) => (
            <Button key={i} size="small" {...props} />
          ))}
        </S.TeamSectionActionsContainer>
      </S.TeamSectionHeader>

      <S.TeamSectionChildrenContainer>{children}</S.TeamSectionChildrenContainer>
    </S.TeamSection>
  );
};
