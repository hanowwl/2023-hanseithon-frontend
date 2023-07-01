import styled from "@emotion/styled";

import { Container } from "src/components/layouts";

export const ThirdInnerContainer = styled(Container)``;

export const ThirdContent = styled.div`
  width: 100%;
  max-width: 1140px;

  margin: 17.6rem auto 0 auto;
`;

export const ThirdSectionTitle = styled.h1`
  font-size: 4.4rem;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const ThirdSectionDescription = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.text.secondary.default};
`;

export const EmojiCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 3.5rem;
  //
`;

// export const ContentBoxContainer = styled.div`
//   display: flex;
// `;
// export const ContentBox = styled.div`
//   width: 35.8rem;
//   height: 31rem;

//   display: flex;
//   flex-direction: column;

//   background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #171717;
//   border-radius: 18px;
//   margin: 4.9rem auto 0 auto;
// `;
// export const ContainerInContentBox = styled.div`
//   margin: 4rem 3.6rem;
// `;
// export const ContentEmojiBox = styled.div`
//   display: flex;

//   width: 6.8rem;
//   height: 6.8rem;

//   background: #fff;
//   border-radius: 0.8rem;
// `;
// export const ContentEmoji = styled.div`
//   font-size: 4.4rem;
//   font-weight: 800;

//   line-height: 5.3rem;

//   margin: auto;
// `;
// export const ContentTitle = styled.h2`
//   font-size: 2.4rem;
//   font-weight: 700;
//   line-height: 2.9rem;

//   margin-top: 2.4rem;
// `;
// export const ContentCount = styled.h1`
//   font-size: 4.8rem;
//   font-weight: 700;

//   line-height: 5.7rem;

//   margin-top: 2.4rem;
// `;
// export const ContentDesc = styled.h3`
//   font-size: 2rem;
//   font-weight: 400;

//   line-height: 2.4rem;
//   color: #979797;

//   margin-top: 1.2rem;
// `;
