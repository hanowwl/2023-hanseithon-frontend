import React from "react";

import { QuestionCard, QuestionCardProps } from "src/components/common";
import { Container } from "src/components/layouts";

import * as S from "./styled";

export interface SeventhSectionProps {
  questions: QuestionCardProps[];
}

const SeventhSection: React.FC<SeventhSectionProps> = ({ questions }) => {
  return (
    <S.SeventhSection>
      <Container>
        <S.SeventhSectionTitle>자주 묻는 질문</S.SeventhSectionTitle>
        <S.QuestionBoxList>
          {questions.map((props, i) => (
            <QuestionCard key={i} {...props} />
          ))}
        </S.QuestionBoxList>
      </Container>
    </S.SeventhSection>
  );
};

export { SeventhSection };
