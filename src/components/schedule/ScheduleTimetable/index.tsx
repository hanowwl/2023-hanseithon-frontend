import React from "react";

import Link from "next/link";

import dayjs, { Dayjs } from "dayjs";

import * as S from "./styled";
import { ScheduleTime } from "../ScheduleTime";

export interface ScheduleTimetableTime {
  startAt: Dayjs;
  endAt: Dayjs;
  schedule: string;
}

export interface ScheduleTimetableProps {
  date: Dayjs;
  schedules: ScheduleTimetableTime[];

  now?: Dayjs;
  isActive?: boolean;
}

export const ScheduleTimetable: React.FC<ScheduleTimetableProps> = ({
  date,
  schedules,
  now = dayjs(),
  isActive = false,
}) => {
  return (
    <S.ScheduleTimetableContainer isActive={isActive}>
      <S.ScheduleTimetableDate>
        <Link
          style={{ textDecoration: "none" }}
          href={`/schedules?date=${date.format("MM/DD")}`}
          replace
        >
          <S.ScheduleTimetableDateButton isActive={isActive}>
            {date.format("M월 DD일 (ddd)")}
          </S.ScheduleTimetableDateButton>
        </Link>
      </S.ScheduleTimetableDate>

      <S.ScheduleTimetableList>
        {schedules.map(({ startAt, endAt, schedule }, i) => {
          const time = `${startAt.format("HH:mm")} ~ ${endAt.format("HH:mm")}`;
          const isCurrentSchedule = now.isBetween(startAt, endAt, "minute", "[)");

          return (
            <li key={i}>
              <ScheduleTime time={time} schedule={schedule} isCurrentSchedule={isCurrentSchedule} />
            </li>
          );
        })}
      </S.ScheduleTimetableList>
    </S.ScheduleTimetableContainer>
  );
};
