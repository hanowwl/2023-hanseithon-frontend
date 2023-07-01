import styled from "@emotion/styled";

export const EmojiCardContainer = styled.div`
  width: 35rem;
  padding: 3.6rem 4rem;
  border-radius: 1.8rem;
  background-color: ${(props) => props.theme.color.foreground};
`;

export const EmojiBox = styled.div<{ backgroundColor: string }>`
  width: 6.8rem;
  height: 6.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 2.4rem;
  font-size: 4.4rem;
`;

export const EmojiCardName = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 2.4rem;
`;

export const EmojiCardValue = styled.p`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

export const EmojiCardDescription = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #979797;
`;
