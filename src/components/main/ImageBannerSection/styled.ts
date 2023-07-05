import styled from "@emotion/styled";

export const ImageBannerSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  padding: 24rem 0;

  @media screen and (max-width: 767px) {
    padding: 12rem 0;

    img {
      width: 36rem;
      height: 18rem;
    }
  }
`;
