import React from "react";

import { EmojiCard, EmojiCardProps } from "src/components/common";

import * as S from "./styled";

// export interface RecordItem {
//   emoji: string;
//   title: string;
//   value: string;
//   description: string;
// }

export interface MainThirdSectionProps {
  records: EmojiCardProps[];
}

const ThirdSection: React.FC<MainThirdSectionProps> = ({ records }) => {
  return (
    <>
      <S.ThirdInnerContainer>
        <S.ThirdSectionTitle>드디어 6년째을 맞이한, 한세톤</S.ThirdSectionTitle>
        <S.ThirdSectionDescription>이젠 없어선 안될 한세의 전통으로</S.ThirdSectionDescription>

        <S.EmojiCardList>
          {records.map((props, i) => (
            <EmojiCard key={i} {...props} />
          ))}
        </S.EmojiCardList>
      </S.ThirdInnerContainer>

      {/* <S.ThirdContent>
        <S.ThirdTitle>드디어 6년째을 맞이한, 한세톤</S.ThirdTitle>
        <S.ThirdDescription>이젠 없어선 안될 한세의 전통으로</S.ThirdDescription>
        <S.ContentBoxContainer>
          {records.map((content, idx) => {
            return (
              <S.ContentBox key={idx}>
                <S.ContainerInContentBox>
                  <S.ContentEmojiBox>
                    <S.ContentEmoji>{content.emoji}</S.ContentEmoji>
                  </S.ContentEmojiBox>
                  <S.ContentTitle>{content.title}</S.ContentTitle>
                  <S.ContentCount>{content.value}</S.ContentCount>
                  <S.ContentDesc>{content.description}</S.ContentDesc>
                </S.ContainerInContentBox>
              </S.ContentBox>
            );
          })}
        </S.ContentBoxContainer>
      </S.ThirdContent> */}
    </>
  );
};

export { ThirdSection };
