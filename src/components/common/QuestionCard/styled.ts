import styled from "@emotion/styled";

export const QuestionCardContainer = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 0.8rem;
  background-color: ${(props) => props.theme.color.foreground};
`;

export const QuestionText = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.text.primary.default};
  user-select: none;
  cursor: pointer;
`;

export const AnswerContainer = styled.div`
  overflow: hidden;
  transition: height 150ms;
  padding-left: 2.2rem;
`;

export const AnswerText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin: 1.6rem 0 0 0;
`;
