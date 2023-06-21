import React from "react";

import * as S from "./styled";

export interface SecondProps {
  whatHackathon: string;
  robot: string;
  plus: string;
  marathon: string;
  description: React.ReactNode;
}

const SecondSection: React.FC<SecondProps> = ({
  whatHackathon,
  robot,
  plus,
  marathon,
  description,
}) => {
  return (
    <S.SecondSection>
      <S.WhatHackathonContainer>
        <S.WhatHackathon>{whatHackathon}</S.WhatHackathon>
        <S.EmojiContainer>
          <S.Emoji>{robot}</S.Emoji>
          <S.Sum>{plus}</S.Sum>
          <S.Emoji>{marathon}</S.Emoji>
        </S.EmojiContainer>
      </S.WhatHackathonContainer>
      <S.HackathonDescriptionContainer>{description}</S.HackathonDescriptionContainer>
    </S.SecondSection>
  );
};

export { SecondSection };
