interface ScheduleData {
  time: string;
  schedule: string;
}

export const THURSDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    time: "15:00 ~ 15:30",
    schedule: "참가자 입장 및 등록",
  },
  {
    time: "15:30 ~ 16:00",
    schedule: "키노트",
  },
  {
    time: "16:00 ~ 18:00",
    schedule: "자율 개발",
  },
  {
    time: "18:00 ~ 19:00",
    schedule: "저녁 식사/멘토단 오리엔테이션",
  },
  {
    time: "19:00 ~ 19:30",
    schedule: "이벤트 타임",
  },
  {
    time: "19:30 ~ 23:00",
    schedule: "자율 개발 및 멘토링",
  },
  {
    time: "23:00 ~ 24:00",
    schedule: "야식 시간 및 자율 개발",
  },
];

export const FRIDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    time: "08:00 ~ 09:00",
    schedule: "아침 식사 배부",
  },
  {
    time: "09:00 ~ 12:00",
    schedule: "자율 개발 및 멘토링",
  },
  {
    time: "12:00 ~ 14:00",
    schedule: "점심 식사 및 발표 준비",
  },
  {
    time: "14:00 ~ 15:30",
    schedule: "발표 및 심사",
  },
  {
    time: "15:30 ~ 16:00",
    schedule: "시상",
  },
  {
    time: "15:00 ~ 18:00",
    schedule: "발표 및 심사",
  },
  {
    time: "18:00 ~ 18:30",
    schedule: "시상",
  },
];

export const DAY_DATE = [
  {
    day: 20,
    dayName: "7/20",
    detail: "7월 20일(목)",
    arr: THURSDAY_SCHEDULE_ARRAY,
  },
  {
    day: 21,
    dayName: "7/21",
    detail: "7월 21일(금)",
    arr: FRIDAY_SCHEDULE_ARRAY,
  },
];
