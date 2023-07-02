import React from "react";

import { EmojiCard, EmojiCardProps } from "src/components/common";

import * as S from "./styled";

export interface MainThirdSectionProps {
  records: EmojiCardProps[];
}

const ThirdSection: React.FC<MainThirdSectionProps> = ({ records }) => {
  return (
    <section>
      <S.ThirdInnerContainer>
        <S.ThirdSectionTitle>드디어 6년째을 맞이한, 한세톤</S.ThirdSectionTitle>
        <S.ThirdSectionDescription>이젠 없어선 안될 한세의 전통으로</S.ThirdSectionDescription>

        <S.EmojiCardList>
          {records.map((props, i) => (
            <EmojiCard key={i} {...props} />
          ))}
        </S.EmojiCardList>
      </S.ThirdInnerContainer>
    </section>
  );
};

export { ThirdSection };
