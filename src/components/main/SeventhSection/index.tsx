import React, { useEffect, useRef, useState } from "react";

import * as S from "./styled";

export interface SeventhFAQ {
  question: string;
  answer: string;
}

interface SeventhFaqArr {
  faqArr: SeventhFAQ[];
}

const SeventhSection: React.FC<SeventhFaqArr> = ({ faqArr }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const faqElementRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    faqElementRefs.current.forEach((faqElementRef, idx) => {
      if (!faqElementRef) return;
      faqElementRef.style.paddingBottom = openIndexes.includes(idx) ? "3.4rem" : "0";
    });
  }, [openIndexes]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((idx) => idx !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <S.SeventhSection>
      <S.SeventhFAQ>
        <S.faqTitle>자주 묻는 질문</S.faqTitle>
        <S.faqContainer>
          {faqArr.map((item, idx) => (
            <S.faqElement
              key={idx}
              onClick={() => toggleFaq(idx)}
              ref={(ref) => (faqElementRefs.current[idx] = ref)}
            >
              <S.questionText>{item.question}</S.questionText>
              {openIndexes.includes(idx) && <S.answerText>{item.answer}</S.answerText>}
            </S.faqElement>
          ))}
        </S.faqContainer>
      </S.SeventhFAQ>
    </S.SeventhSection>
  );
};

export { SeventhSection };
