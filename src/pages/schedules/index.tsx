import React, { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import { PageLayout } from "src/components/layouts";
import { ScheduleDateElement, ScheduleElementProps } from "src/components/schedule";
import { DAY_DATE } from "src/constants";

import * as S from "./styled";

// 현재 시간이 주어진 시간 범위에 포함되는지 확인하는 함수
function isTimeInRange(timeRange: string, currentTime: string): boolean {
  // 시간 문자열에서 시작 시간과 종료 시간 추출
  const [startTime, endTime] = timeRange.split(" ~ ");

  // 현재 시간을 시간과 분으로 분리
  const [currentHour, currentMinute] = currentTime.split(":").map(Number);

  // 시작 시간과 종료 시간을 시간과 분으로 분리
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  // 현재 시간과 시작 시간, 종료 시간 비교
  if (currentHour > startHour && currentHour < endHour) {
    return true;
  } else if (currentHour === startHour && currentMinute >= startMinute) {
    return true;
  } else if (currentHour === endHour && currentMinute <= endMinute) {
    return true;
  }

  return false;
}

export interface ScheduleTimeData {
  elementArray: ScheduleElementProps[];
}

export default function SchedulesPage() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDate();
  const [nowDate, setNowDate] = useState<string>(`${hours}:${minutes}`);

  const router = useRouter();
  const pageDateUrl = router.query.date;

  useEffect(() => {
    setNowDate(`${hours}:${minutes}`);
    router.replace(`/schedules?date=${day === 21 ? `7/21` : `7/20`}`);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hours, minutes, day]);

  // 20일 이전인지 여부를 계산하는 변수
  const isBefore20th = day <= 20;

  // 20일 이전인 경우 해당 스케줄의 날짜를 저장
  const targetDay = isBefore20th ? 20 : 21;

  return (
    <S.ScheduleSection>
      <PageLayout title="대회 일정" description="저희 한세톤은 아래와 같이 진행될 예정이에요!">
        <S.ScheduleContainer>
          {DAY_DATE.map((date, idx) => {
            // 현재 스케줄 날짜와 targetDay(20일 또는 21일)이 같은지 여부를 계산
            const isCurrentDate = date.day === targetDay;

            return (
              <S.ScheduleElementContainer current={pageDateUrl === date.dayName} key={idx}>
                <S.ScheduleUl>
                  <S.ScheduleLi>
                    <S.ScheduleUl>
                      {/* Button 컴포넌트에 currentDateBool 전달 */}
                      <Link
                        style={{ textDecoration: "none" }}
                        href={`/schedules?date=${date.dayName}`}
                      >
                        <S.ShowScheduleButton isCurrentDate={pageDateUrl === date.dayName}>
                          {date.detail}
                        </S.ShowScheduleButton>
                      </Link>
                    </S.ScheduleUl>
                    {date.arr.map((data, idx) => (
                      <ScheduleDateElement
                        key={idx}
                        time={data.time}
                        nowSchedule={data.schedule}
                        isToday={isCurrentDate}
                        isCurrentSchedule={day === date.day && isTimeInRange(data.time, nowDate)}
                      />
                    ))}
                  </S.ScheduleLi>
                </S.ScheduleUl>
              </S.ScheduleElementContainer>
            );
          })}
        </S.ScheduleContainer>
      </PageLayout>
    </S.ScheduleSection>
  );
}
