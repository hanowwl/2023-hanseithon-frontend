import dayjs, { Dayjs } from "dayjs";

interface ScheduleData {
  startAt: Dayjs;
  endAt: Dayjs;
  schedule: string;
}

export const THURSDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    startAt: dayjs("2023-07-20 15:00:00"),
    endAt: dayjs("2023-07-20 15:30:00"),
    schedule: "참가자 입장 및 등록",
  },
  {
    startAt: dayjs("2023-07-20 15:30:00"),
    endAt: dayjs("2023-07-20 16:00:00"),
    schedule: "키노트",
  },
  {
    startAt: dayjs("2023-07-20 16:00:00"),
    endAt: dayjs("2023-07-20 18:00:00"),
    schedule: "자율 개발",
  },
  {
    startAt: dayjs("2023-07-20 18:00:00"),
    endAt: dayjs("2023-07-20 19:00:00"),
    schedule: "저녁 식사/멘토단 오리엔테이션",
  },
  {
    startAt: dayjs("2023-07-20 19:00:00"),
    endAt: dayjs("2023-07-20 19:30:00"),
    schedule: "이벤트 타임",
  },
  {
    startAt: dayjs("2023-07-20 19:30:00"),
    endAt: dayjs("2023-07-20 23:00:00"),
    schedule: "자율 개발 및 멘토링",
  },
  {
    startAt: dayjs("2023-07-20 23:00:00"),
    endAt: dayjs("2023-07-21 00:00:00"),
    schedule: "야식 시간 및 자율 개발",
  },
];

export const FRIDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    startAt: dayjs("2023-07-21 08:00:00"),
    endAt: dayjs("2023-07-21 09:00:00"),
    schedule: "아침 식사 배부",
  },
  {
    startAt: dayjs("2023-07-21 09:00:00"),
    endAt: dayjs("2023-07-21 12:00:00"),
    schedule: "자율 개발 및 멘토링",
  },
  {
    startAt: dayjs("2023-07-21 12:00:00"),
    endAt: dayjs("2023-07-21 14:00:00"),
    schedule: "점심 식사 및 발표 준비",
  },
  {
    startAt: dayjs("2023-07-21 14:00:00"),
    endAt: dayjs("2023-07-21 15:30:00"),
    schedule: "발표 및 심사",
  },
  {
    startAt: dayjs("2023-07-21 15:30:00"),
    endAt: dayjs("2023-07-21 16:00:00"),
    schedule: "시상",
  },
  {
    startAt: dayjs("2023-07-21 15:00:00"),
    endAt: dayjs("2023-07-21 18:00:00"),
    schedule: "발표 및 심사",
  },
  {
    startAt: dayjs("2023-07-21 18:00:00"),
    endAt: dayjs("2023-07-21 18:30:00"),
    schedule: "시상",
  },
];

export const DAY_DATE = [
  {
    date: dayjs("2023-07-20"),
    schedules: THURSDAY_SCHEDULE_ARRAY,
  },
  {
    date: dayjs("2023-07-21"),
    schedules: FRIDAY_SCHEDULE_ARRAY,
  },
];
