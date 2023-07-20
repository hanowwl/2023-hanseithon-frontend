import React, { useEffect, useState, useMemo } from "react";

import dayjs from "dayjs";

import * as S from "./styled";
import { Container } from "../Container";

export interface TeamLayoutProps {
  children?: React.ReactNode;
}

export const TeamLayout: React.FC<TeamLayoutProps> = ({ children }) => {
  const HANSEITHON_END_TIME = useMemo(() => new Date("2023-07-21 14:00:00"), []);
  const [now, setNow] = useState(new Date());

  const leftTimeToEnd = useMemo(() => {
    const leftTime = HANSEITHON_END_TIME.getTime() - now.getTime();
    if (leftTime <= 0) return "00:00:00:00";

    return dayjs.duration(leftTime).format("DD:HH:mm:ss");
  }, [HANSEITHON_END_TIME, now]);

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container style={{ padding: "2.4rem 0 4.8rem 0", minHeight: "calc(100vh - 9rem)" }}>
      <S.TeamLayoutBannerContainer>
        <S.DeadLineText>한세톤 종료까지 남은 시간</S.DeadLineText>
        <S.DeadLineLeftTime>{leftTimeToEnd}</S.DeadLineLeftTime>
      </S.TeamLayoutBannerContainer>
      <S.TeamLayoutChildrenContainer>{children}</S.TeamLayoutChildrenContainer>
    </Container>
  );
};
