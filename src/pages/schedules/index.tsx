import React, { useEffect, useState } from "react";

import { Container, Title } from "src/components/layouts";
import { Day, Element, ScheduleElementProps } from "src/components/schedule";
import { dayDate } from "src/constants";

import * as S from "./styled";

function isTimeInRange(timeRange: string, currentTime: string) {
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
  //현재 시간을 불러오는 데이트를 저장하는 now
  const now = new Date();

  //현재 시간을 담고 있는 hours
  const hours = now.getHours();

  //현재 몇분인지 담고 있는 minutes
  const minutes = now.getMinutes();

  //몇일인지를 담고 있는 day
  const day = now.getDate();

  //현재 시간과 분을 저장하는 string형 state
  const [nowDate, setNowDate] = useState<string>("");

  /**
   * 테스트 하려면 hours를 현재 시간으로 더하거나 빼고
   * constants에 scheduleData에 day를 현재 날짜로 바꾸면 됩니다.
   * ex) day: 1
   */

  useEffect(() => {
    setNowDate(`${hours}:${minutes}`);
  }, [hours, minutes]);

  return (
    <S.ScheduleSection>
      <Container maxWidth="1140px">
        <Title mainText="타임 테이블" descText="저희 한세톤은 아래와 같이 진행될 예정이에요!" />
        <S.ScheduleContainer>
          {dayDate.map((date, idx) => (
            <S.ScheduleUl key={idx}>
              <S.ScheduleLi>
                <S.ScheduleUl marginTop="5.9rem" marginBottom="3.4rem">
                  <Day currentDateBool={true} detailDate={date.detail} />
                </S.ScheduleUl>
                {date.arr.map((data, idx) => (
                  <Element
                    key={idx}
                    time={data.time}
                    nowSchedule={data.nowSchedule}
                    nowCurrent={isTimeInRange(data.time, nowDate) && date.day === day}
                  />
                ))}
              </S.ScheduleLi>
            </S.ScheduleUl>
          ))}
        </S.ScheduleContainer>
      </Container>
    </S.ScheduleSection>
  );
}
