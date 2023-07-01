import { ScheduleData } from "../components/schedule/Element/index";
export const ThursScheduleArr: ScheduleData[] = [
  {
    time: "15:00 ~ 15:30",
    nowSchedule: "참가자 입장 및 등록",
  },
  {
    time: "15:30 ~ 16:00",
    nowSchedule: "키노트",
  },
  {
    time: "16:00 ~ 18:00",
    nowSchedule: "자율 개발",
  },
  {
    time: "18:00 ~ 19:00",
    nowSchedule: "저녁 식사/멘토링 OT",
  },
  {
    time: "19:00 ~ 19:30",
    nowSchedule: "이벤트 타임",
  },
  {
    time: "19:30 ~ 23:00",
    nowSchedule: "자율 개발 및 멘토링",
  },
  {
    time: "23:00 ~ 24:00",
    nowSchedule: "야식 시간 및 자율 개발",
  },
];

export const FriScheduleArr: ScheduleData[] = [
  {
    time: "08:00 ~ 09:00",
    nowSchedule: "아침 식사",
  },
  {
    time: "09:00 ~ 12:00",
    nowSchedule: "자율 개발 및 멘토링",
  },
  {
    time: "12:00 ~ 13:00",
    nowSchedule: "점심 식사",
  },
  {
    time: "13:00 ~ 13:30",
    nowSchedule: "이벤트 타임",
  },
  {
    time: "13:30 ~ 15:00",
    nowSchedule: "파일 제출 및 발표 준비",
  },
  {
    time: "15:00 ~ 18:00",
    nowSchedule: "발표 및 심사",
  },
  {
    time: "18:00 ~ 18:30",
    nowSchedule: "시상",
  },
];

export const dayDate = [
  {
    day: 20,
    detail: "7월 20일(목)",
    arr: ThursScheduleArr,
  },
  {
    day: 21,
    detail: "7월 21일(금)",
    arr: FriScheduleArr,
  },
];
