import React, { useRef } from "react";

import { useScroll, useTransform } from "framer-motion";

import { animationOrder } from "src/constants";

import * as S from "./styled";

const SixthSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const getAnimationProps = (
    animationStart: number,
    animationEnd: number,
    animationHide: number
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const opacity = useTransform(
      scrollYProgress,
      [animationStart, animationEnd, animationHide],
      [0, 1, 0]
    );
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const translateY = useTransform(
      scrollYProgress,
      [animationStart, animationEnd, animationHide],
      ["-8rem", "0rem", "8rem"]
    );
    return { opacity, translateY };
  };

  const paragraphs = [
    {
      text: (
        <S.SixthContentText>
          개발에
          <br />
          <br />
          정답은
          <br />
          <br />
          없으니까
        </S.SixthContentText>
      ),
      animationStart: animationOrder.fadeInEnd + 0.02,
      animationEnd: animationOrder.showParagraphOne,
      animationHide: animationOrder.hideParagraphOne,
    },
    {
      text: (
        <S.SixthContentText>
          한세톤과
          <br />
          <br />
          너가 원하는 길을
          <br />
          <br />
          개척해봐
        </S.SixthContentText>
      ),
      animationStart: animationOrder.showParagraphTwoStart,
      animationEnd: animationOrder.showParagraphTwoEnd,
      animationHide: animationOrder.hideParagraphTwo,
    },
  ];
  const position = useTransform(scrollYProgress, (pos: any) =>
    pos >= 1 || pos == 0 ? "relative" : "fixed"
  );
  return (
    <S.SixthSection ref={targetRef}>
      {paragraphs.map((paragraph, index) => (
        <S.SixthContent
          key={index}
          style={{
            position,
            ...getAnimationProps(
              paragraph.animationStart,
              paragraph.animationEnd,
              paragraph.animationHide
            ),
          }}
        >
          {paragraph.text}
        </S.SixthContent>
      ))}
    </S.SixthSection>
  );
};

export { SixthSection };
