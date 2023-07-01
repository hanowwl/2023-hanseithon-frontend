import React from "react";

import * as S from "./styled";

export interface EmojiCardProps {
  emoji: string;
  emojiBackground?: string;
  name: string;
  value: string;
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
      <S.EmojiCardValue>{value}</S.EmojiCardValue>
      <S.EmojiCardDescription>{description}</S.EmojiCardDescription>
    </S.EmojiCardContainer>
  );
};
