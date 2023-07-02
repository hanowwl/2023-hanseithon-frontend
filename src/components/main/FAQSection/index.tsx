import React from "react";

import { QuestionCard, QuestionCardProps } from "src/components/common";
import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface FAQSectionProps {
  questions: QuestionCardProps[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ questions }) => {
  return (
    <S.FAQSection>
      <Container>
        <S.FAQSectionTitle>자주 묻는 질문</S.FAQSectionTitle>
        <S.QuestionBoxList>
          {questions.map((props, i) => (
            <QuestionCard key={i} {...props} />
          ))}
        </S.QuestionBoxList>
      </Container>
    </S.FAQSection>
  );
};
