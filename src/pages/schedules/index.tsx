import React, { useEffect, useMemo, useState } from "react";

import { useRouter } from "next/router";

import dayjs from "dayjs";

import { PageLayout } from "src/components/layouts";
import { ScheduleTimetable } from "src/components/schedule";
import { DAY_DATE } from "src/constants";

import * as S from "./styled";

export default function SchedulesPage() {
  const NOW_CHECK_INTERVAL_SEC = 10;

  const router = useRouter();
  const { date } = useMemo(() => router.query as { date: string }, [router]);

  const [now, setNow] = useState(dayjs());
  const activeDate = useMemo(() => {
    if (now.isBetween("2023-07-20", "2023-07-21", "date", "[]")) return now.format("MM/DD");
    return date || "07/20";
  }, [now, date]);

  useEffect(() => {
    router.replace(`/schedules?date=${activeDate}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeDate]);

  useEffect(() => {
    const interval = setInterval(() => setNow(dayjs()), 1000 * NOW_CHECK_INTERVAL_SEC);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout title="대회 일정" description="저희 한세톤은 아래와 같이 진행될 예정이에요!">
      <S.ScheduleListContainer>
        {DAY_DATE.map(({ date, schedules }, i) => {
          const isToday = date.isToday() || date.format("MM/DD") === activeDate;

          return (
            <ScheduleTimetable
              key={i}
              date={date}
              schedules={schedules}
              isActive={isToday}
              now={now}
            />
          );
        })}
      </S.ScheduleListContainer>
    </PageLayout>
  );
}
