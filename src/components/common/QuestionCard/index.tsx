import React, { useEffect, useRef, useState } from "react";

import * as S from "./styled";

export interface QuestionCardProps {
  question: string;
  answer: string;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, answer }) => {
  const answerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleOnClickQuestion = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!answerRef.current) return;

    const { scrollHeight } = answerRef.current;
    answerRef.current.style.height = open ? `${scrollHeight}px` : "0";
  }, [open]);

  return (
    <S.QuestionCardContainer>
      <S.QuestionText onClick={handleOnClickQuestion}>Q. {question}</S.QuestionText>

      <S.AnswerContainer ref={answerRef}>
        <S.AnswerText>{answer}</S.AnswerText>
      </S.AnswerContainer>
    </S.QuestionCardContainer>
  );
};
