import React from "react";

import * as S from "./styled";

const SecondSection: React.FC = () => {
  return (
    <S.SecondSection>
      <S.SecondSectionInnerContainer>
        <S.SecondSectionTitle>해커톤이 뭔가요?</S.SecondSectionTitle>

        <S.EmojiText style={{ margin: "5.8rem 0 11.8rem 0" }}>
          <S.Emoji>🧑‍💻</S.Emoji>+<S.Emoji>🏃</S.Emoji>
        </S.EmojiText>

        <S.HackathonDescription>
          해커톤은 해킹과 마라톤의 합성어로
          <br />
          <br />
          소프트웨어 개발 분야의 프로그래머, 디자이너, 기획자 등
          <br />
          <strong>
            다양한 분야에서 모여 제한된 시간 안에 아이디어를 도출하고 결과물을 만들어 내는
            이벤트에요
          </strong>
        </S.HackathonDescription>
      </S.SecondSectionInnerContainer>
    </S.SecondSection>
  );
};

export { SecondSection };
