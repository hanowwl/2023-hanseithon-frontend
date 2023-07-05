import React from "react";

import { EmojiCard, EmojiCardProps } from "src/components/common";
import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface HanseithonSectionProps {
  records: EmojiCardProps[];
}

export const HanseithonSection: React.FC<HanseithonSectionProps> = ({ records }) => {
  return (
    <section>
      <S.HanseithonSectionInnerContainer>
        <S.HanseithonSectionSectionTitle>
          이제 6년째를 <br className="mobile-only" />
          맞이한, 한세톤
        </S.HanseithonSectionSectionTitle>
        <S.HanseithonSectionSectionDescription>
          이젠 없어선 안될 한세의 전통으로
        </S.HanseithonSectionSectionDescription>

        <S.EmojiCardList>
          {records.map((props, i) => (
            <EmojiCard key={i} {...props} />
          ))}
        </S.EmojiCardList>
      </S.HanseithonSectionInnerContainer>
    </section>
  );
};
