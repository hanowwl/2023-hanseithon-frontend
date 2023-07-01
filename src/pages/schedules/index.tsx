import { Container, Title } from "src/components/layouts";
import { Button, Element } from "src/components/schedule";

import * as S from "./styled";

export default function SchedulesPage() {
  return (
    <S.ScheduleSection>
      <Container>
        <Title mainText="타임 테이블" descText="저희 한세톤은 아래와 같이 진행될 예정이에요!" />
        <S.ScheduleUl marginTop="5.9rem" marginBottom="3.4rem">
          <Button currentDateBool={true} />
          <Button currentDateBool={false} />
        </S.ScheduleUl>
        <S.ScheduleUl>
          <S.ScheduleLi>
            <Element />
          </S.ScheduleLi>
        </S.ScheduleUl>
      </Container>
    </S.ScheduleSection>
  );
}
