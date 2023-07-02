/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";

import { useScroll, useTransform } from "framer-motion";

import * as S from "./styled";

export interface SixthSectionProps {
  paragraphs: React.ReactNode[];
}

const SixthSectionAnimate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <S.SixthSectionContentContainer>
      <S.SixthSectionInnerContainer ref={targetRef}>
        <S.SixthContentText
          style={{ opacity: scrollFinish ? 1 : opacity, translateY: scrollFinish ? 0 : translateY }}
        >
          {children}
        </S.SixthContentText>
      </S.SixthSectionInnerContainer>
    </S.SixthSectionContentContainer>
  );
};

const SixthSection: React.FC<SixthSectionProps> = ({ paragraphs }) => {
  return (
    <S.SixthSection>
      {paragraphs.map((component, i) => {
        return <SixthSectionAnimate key={i}>{component}</SixthSectionAnimate>;
      })}
    </S.SixthSection>
  );
};

export { SixthSection };
