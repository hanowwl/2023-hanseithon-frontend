import React from "react";

import * as S from "./styled";

const ThirdSection: React.FC = () => {
  const ThirdDataArr = [
    {
      emoji: "😎",
      title: "누적 참여 학생",
      count: "230명 +",
      desc: "",
    },
    {
      emoji: "🌈",
      title: "운영 기간",
      count: "6회차",
      desc: "2018년부터",
    },
    {
      emoji: "😵",
      title: "갈려나간 노예들",
      count: "120명 +",
      desc: "자랑스럽다! 무!급!노!예!",
    },
  ];
  return (
    <S.ThirdSection>
      <S.ThirdContent>
        <S.ThirdTitle>드디어 6년째을 맞이한, 한세톤</S.ThirdTitle>
        <S.ThirdDescription>이젠 없어선 안될 한세의 전통으로</S.ThirdDescription>
        <S.ContentBoxContainer>
          {ThirdDataArr.map((content, idx) => {
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
