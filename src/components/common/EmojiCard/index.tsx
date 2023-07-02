import React from "react";

import * as S from "./styled";
import { CountProps, Counter } from "../Counter";

export interface EmojiCardProps {
  emoji: string;
  emojiBackground?: string;
  name: string;
  value: string | CountProps;
  description: string;
}

export const EmojiCard: React.FC<EmojiCardProps> = ({
  emoji,
  emojiBackground = "#FFFFFF",
  name,
  value,
  description,
}) => {
  return (
    <S.EmojiCardContainer>
      <S.EmojiBox backgroundColor={emojiBackground}>{emoji}</S.EmojiBox>

      <S.EmojiCardName>{name}</S.EmojiCardName>
      <S.EmojiCardValue>
        {typeof value === "object" ? <Counter {...value} /> : value}
      </S.EmojiCardValue>
      <S.EmojiCardDescription>{description}</S.EmojiCardDescription>
    </S.EmojiCardContainer>
  );
};
