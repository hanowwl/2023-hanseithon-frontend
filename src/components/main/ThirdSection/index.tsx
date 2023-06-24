import React from "react";

import * as S from "./styled";

export interface ArrItem {
  emoji: string;
  title: string;
  count: string;
  desc: string;
}

export interface ThirdProps {
  ThirdArr: ArrItem[];
}

const ThirdSection: React.FC<ThirdProps> = ({ ThirdArr }) => {
  return (
    <S.ThirdSection>
      <S.ThirdContent>
        <S.ThirdTitle>드디어 6년째을 맞이한, 한세톤</S.ThirdTitle>
        <S.ThirdDescription>이젠 없어선 안될 한세의 전통으로</S.ThirdDescription>
        <S.ContentBoxContainer>
          {ThirdArr.map((content, idx) => {
            return (
              <S.ContentBox key={idx}>
                <S.ContainerInContentBox>
                  <S.ContentEmojiBox>
                    <S.ContentEmoji>{content.emoji}</S.ContentEmoji>
                  </S.ContentEmojiBox>
                  <S.ContentTitle>{content.title}</S.ContentTitle>
                  <S.ContentCount>{content.count}</S.ContentCount>
                  <S.ContentDesc>{content.desc}</S.ContentDesc>
                </S.ContainerInContentBox>
              </S.ContentBox>
            );
          })}
        </S.ContentBoxContainer>
      </S.ThirdContent>
    </S.ThirdSection>
  );
};

export { ThirdSection };
