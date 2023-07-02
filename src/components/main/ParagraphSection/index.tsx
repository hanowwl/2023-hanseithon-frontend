/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";

import { useScroll, useTransform } from "framer-motion";

import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface ParagraphSectionProps {
  paragraphs: React.ReactNode[];
}

export const ParagraphSection: React.FC<ParagraphSectionProps> = ({ paragraphs }) => {
  return (
    <S.ParagraphSection>
      {paragraphs.map((component, i) => {
        return <ParagraphSectionAnimate key={i}>{component}</ParagraphSectionAnimate>;
      })}
    </S.ParagraphSection>
  );
};

const ParagraphSectionAnimate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["end end", "start start"] });
  const opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.9], [0, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0.2, 0.45, 0.9], ["-4rem", 0, "4rem"]);
  const [scrollFinish, setScrollFinish] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // TODO: 스크롤 완료 이후, 계속 표시하는 경우 주석 해제 진행하는 걸로
      // if (v === 1) setScrollFinish(false);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <S.ParagraphSectionContentContainer>
      <Container ref={targetRef}>
        <S.ParagraphContentText
          style={{ opacity: scrollFinish ? 1 : opacity, translateY: scrollFinish ? 0 : translateY }}
        >
          {children}
        </S.ParagraphContentText>
      </Container>
    </S.ParagraphSectionContentContainer>
  );
};
