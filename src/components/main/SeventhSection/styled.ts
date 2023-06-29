import styled from "@emotion/styled";

export const SeventhSection = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
`;

export const SeventhFAQ = styled.div`
  width: 100%;
  max-width: 1140px;

  margin: 17.6rem auto 0 auto;
`;

export const faqTitle = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;

  text-align: left;
`;

export const faqContainer = styled.div`
  width: 100%;

  margin-top: 4rem;

  display: flex;
  flex-direction: column;
`;
export const faqElement = styled.div`
  width: 100%;

  margin-right: 2.4rem;
  margin-bottom: 1.6rem;

  border-radius: 0.9rem;
  background-color: #171717;
  cursor: pointer;

  transition: all 0.3s;
`;
export const questionText = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;

  text-align: left;

  padding: 2.8rem 2.4rem;
`;
export const answerText = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;

  text-align: left;

  padding-left: 2.4rem;
`;
