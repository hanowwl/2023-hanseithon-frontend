import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Container, Title } from "src/components/layouts";
import { Button, Element, ScheduleElementProps } from "src/components/schedule";
import { dayDate } from "src/constants";

import * as S from "./styled";

function isTimeInRange(
  choiceFunction: number,
  timeRange: string,
  currentTime: string,
  today: number,
  scheduleDay: number
) {
  // 시간 문자열에서 시작 시간과 종료 시간 추출
  if (choiceFunction === 1) {
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
  } else {
    //20>=day ? date.day == 21 ?  false : true : date.day == 20 ? false : true
    if (20 >= today) {
      if (scheduleDay == 21) {
        return false;
      } else {
        return true;
      }
    } else if (scheduleDay == 20) {
      return false;
    } else {
      return true;
    }
  }
}
export interface ScheduleTimeData {
  elementArray: ScheduleElementProps[];
}

export default function SchedulesPage() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDate();
  const [nowDate, setNowDate] = useState<string>("");

  useEffect(() => {
    setNowDate(`${hours}:${minutes}`);
  }, [hours, minutes]);

  // 20일 이전인지 여부를 계산하는 변수
  const isBefore20 = day <= 20;

  // 20일 이전인 경우 해당 스케줄의 날짜를 저장
  const targetDay = isBefore20 ? 20 : 21;

  const router = useRouter();
  const pageUrl = router.query.id;

  return (
    <S.ScheduleSection>
      <Container maxWidth="1140px">
        <Title mainText="타임 테이블" descText="저희 한세톤은 아래와 같이 진행될 예정이에요!" />
        <S.ScheduleContainer>
          {dayDate.map((date, idx) => {
            // 현재 스케줄 날짜와 targetDay(20일 또는 21일)이 같은지 여부를 계산
            const isCurrentDate = date.day === targetDay;

            return (
              <S.ScheduleElementContainer current={pageUrl === date.dayName} key={idx}>
                <S.ScheduleUl>
                  <S.ScheduleLi>
                    <S.ScheduleUl marginTop="5.9rem" marginBottom="3.4rem">
                      {/* Button 컴포넌트에 currentDateBool 전달 */}
                      <Button
                        pushUrl={date.dayName}
                        currentDateBool={pageUrl === date.dayName}
                        detailDate={date.detail}
                      />
                    </S.ScheduleUl>
                    {date.arr.map((data, idx) => (
                      <Element
                        key={idx}
                        time={data.time}
                        nowSchedule={data.nowSchedule}
                        dayBoolean={isCurrentDate}
                        nowCurrent={isTimeInRange(1, data.time, nowDate, 0, 0) && isCurrentDate}
                      />
                    ))}
                  </S.ScheduleLi>
                </S.ScheduleUl>
              </S.ScheduleElementContainer>
            );
          })}
        </S.ScheduleContainer>
      </Container>
    </S.ScheduleSection>
  );
}
