import React from "react";

import { Dayjs } from "dayjs";

import { Button, ButtonProps } from "src/components/common";

import * as S from "./styled";

export interface TeamLogMessageProps {
  message: string | React.ReactNode;
  actionAt: Dayjs;
  member?: string;

  actions?: Omit<ButtonProps, "size">[];
}

const TeamLogMessageComponent: React.FC<TeamLogMessageProps> = ({
  message,
  actionAt,
  member,
  actions,
}) => {
  return (
    <S.TeamLogContainer>
      <div style={{ flex: "1 1 auto" }}>
        <S.TeamLogMessage>{message}</S.TeamLogMessage>
        <S.TeamLogDateText>
          {actionAt.format("YYYY/MM/DD HH:mm:ss")}
          {member && `- ${member}`}
        </S.TeamLogDateText>
      </div>
      <S.TeamLogActionsContainer>
        {actions?.map((props, i) => (
          <Button key={i} {...props} />
        ))}
      </S.TeamLogActionsContainer>
    </S.TeamLogContainer>
  );
};

export const TeamLogMessage = Object.assign(TeamLogMessageComponent, {
  Highlighter: S.TeamLogHighlighter,
  List: S.TeamLogsList,
});
